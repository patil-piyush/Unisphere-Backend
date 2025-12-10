const Event = require('../models/event')
const EventResgistration = require('../models/eventRegistration')
const EventWaitlist = require('../models/eventWaitlist')
const transporter = require('../config/mail')

// create a new event president only
const createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            bannerURL,
            date,
            venue,
            start_time,
            end_time,
            deadline,
            max_capacity,
            location_coordinates
        } = req.body;

        if(new Date(deadline) <= new Date()){
            return res.status(400).json({ error: 'Deadline must be a future date' });
        }

        if(new Date(end_time) <= new Date(start_time)){
            return res.status(400).json({ error: 'End time must be after start time' });
        }

        if(new Date(date) < new Date()){
            return res.status(400).json({ error: 'Event date must be a future date' });
        }

        const event = await Event.create({
            club_id: req.club_id,
            title,
            description,
            bannerURL,
            date,
            venue,
            start_time,
            end_time,
            deadline,
            max_capacity,
            location_coordinates
        })

        res.status(201).json({ message: 'Event created successfully', event });

    }catch(error){
        res.status(500).send({ error: 'Failed to create event' });
    }
}

// update event details both president and members
const updateEvent = async(req, res) => {
    try{
        const event = req.body;
        if(!event) return res.status(404).json({message:"Event Not Found"});

        if(event.club_id.toString() !== req.club_id){
            return res.status(403).json({ error: 'Unauthorized to update this event' });
        }

        const updated = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json({message: "Event Updated Successfully", updated});
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete event president only 
const deleteEvent = async(req, res) => {
    try{
        const event = await Event.findById(req.params.id);
        if(!event) return res.status(404).json({message:"Event Not Found"});

        if(event.club_id.toString() != req.clubId) {
            return res.status(403).json({ error: 'Unauthorized to delete this event' });
        }

        await EventResgistration.deleteMany({event_id: event._id});
        await EventWaitlist.deleteMany({event_id: event._id});
        await Comment.deleteMany({event_id: event._id});
        await Event.findByIdAndDelete(event._id);
        res.status(200).json({message: "Event Deleted Successfully"});
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

//close registration
const closeRegistration = async(req, res) => {
    try{
        const event = await Event.findById(req.params.id);
        if(!event) return res.status(404).json({message:"Event Not Found"});

        if(event.club_id.toString != req.clubId) return res.status(403).json({error: "Not your event"});

        event.isClosed = true;
        await event.save();
        res.status(200).json({message:"Event Registrations Closed"});

    }catch(error){
        res.status(500).json({error: error.message});
    }
}

//reopen registration

const openRegistration = async(req, res) => {
    try{
        const event = event.findById(req.params.id);
        if(!event) return res.status(404).json({message:"Event Not Found"});

        if(event.club_id.toString != req.clubId) return res.status(403).json({error: "Not your event"});

        event.isClosed = false;
        await event.save();

        res.status(200).json({message:"Event Registrations Reopened",event});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

// get all events 
const getAllEvents = async(req,res) => {
    try{
        const events = await Event.find()
            .populate("club_id","name logoURL")
            .sort({start_time: 1});

        if(!events) return res.status(404).json({message: "No Events Found"});

        res.status(200).json(events);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

//get event of logged-in clubs
const getClubEvents = async(req,res) => {
    try{
        const events = await Event.find({club_id: req.club_id})
            .sort({start_time:1});

        if(!events) return res.status(404).json({message: "No Events Found"});

        res.status(200).json(events);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
// get registrations of an event 
const getEventRegistrations = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    if (event.club_id.toString() !== req.clubId) {
      return res.status(403).json({ message: "Not your event" });
    }

    const registrations = await EventRegistration.find({ event_id: event._id })
      .populate("user_id", "name email college_Name department");

    const waitlist = await EventWaitlist.find({ event_id: event._id })
      .populate("user_id", "name email college_Name department")
      .sort({ joinedAt: 1 });

    res.status(200).json({ registrations, waitlist });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
