import { Profile } from '../models/profile.js'

export {
    index, 
    show,
}

function show(req, res) {
    console.log('work please')
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