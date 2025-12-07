const Club = require('../models/club');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// creating a new club
const createClub = async(req, res) => {
    try{
        const {name, description, logoURL, email, password} = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newClub = await Club.creat({
            name,
            description,
            logoURL,
            email,
            password: hashedPassword
        });

        res.status(201).json({message: "Club registered successfully", club: newClub});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

// handling the club login
const loginClub = async(req, res) => {
    try{
        const {email, password} = req.body;

        const member = await ClubMember.findOne({ email });
        if (!member) return res.status(404).json({ message: "Member not found" });

        const club = await Club.findOne({email});
        if(!club) return res.status(404).json({message: "Club not found"});

        const isValid = await bcrypt.compare(password, club.password);
        if(!isValid) return res.status(401).json({message: "Invalid credentials"});
        
        const token = jwt.sign(({
            id: member._id,
            clubId: member.clubId,
            role: member.role
        }), process.env.JWT_SECRET, {expiresIn: '7d'});   
          
        res.status(200).json({token});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

// updating club details
const updateClub = async (req, res) => {
    try {
        const updatedClub = await this.updateClub.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true }
        ).select('-password');
        
        if(!updatedClub) return res.status(404).json({message: 'Club not found'});

        res.status(200).json({message: "Club updated", club: updatedClub})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// deleting club
const deleteClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    res.status(200).json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// fetching club details
const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find().select("-password");
    res.status(200).json(clubs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// change club password
const changeClubPassword = async(req, res) => {
    try{
        const {oldPassword, newPassword} = req.body;

        const club = await Club.findById(req.params.id);
        if(!club) return res.status(404).json({message: "Club not found"});

        const isValid = await bcrypt.compare(oldPassword, club.password);
        if(!isValid) return res.status(401).json({message: "Incorrect Password"});

        club.password = await bcrypt.hash(newPassword, 10);
        await club.save();

        res.status(200).json({message: "Password updated successfully"});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    createClub,
    loginClub,
    updateClub,
    deleteClub,
    getAllClubs,
    changeClubPassword
}