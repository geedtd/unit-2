import { Profile } from '../models/profile.js'

export {
    index, 
    show,
}

function show(req, res) {
    Profile.findById(req.parms.id)  
    .then((profile) => {
        Profile.findById(req.user.profile._id)
        .then( self => {
            const isSelf = self._id.equals(profile.__id)
            res.render('profiles/show', {
                title: `Chef ${profile.name}'s Profile`,
                profile,
                self,
                isSelf,
            })
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req/user.profile}`)
    })
}

function index(req, res) {
    Profile.find({})
    .then(profiles => {
        res.render('profiles/index', {
            profiles,
            title: 'User Profile'
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req/user.profile}`)
    })
}