const express = require('express');
const router = express.Router();

const adminAuth = require('../middlewares/userAuthMiddleware');

const {
    createClub,
    updateClub,
    deleteClub,
    getAllClubs,
    changeClubPassword,
} = require('../controllers/clubController');

const {
    addClubMember,
    removeClubMember,
    getClubMembers
} = require('../controllers/clubMemberController');

// public
router.post('/admin/register', createClub);

// Auth Club
router.put('/:id/change-password', adminAuth.adminOnly, changeClubPassword);
router.get('/', adminAuth.adminOnly, getAllClubs);
router.put('/:id', adminAuth.adminOnly, updateClub);
router.delete('/:id', adminAuth.adminOnly, deleteClub);

// Club management by club
router.post('/members/:clubId', adminAuth.adminOnly, addClubMember);
router.delete('/members/:clubId/:memberId', adminAuth.adminOnly, removeClubMember);
router.get('/members/:clubId', adminAuth.adminOnly, getClubMembers);

module.exports = router;