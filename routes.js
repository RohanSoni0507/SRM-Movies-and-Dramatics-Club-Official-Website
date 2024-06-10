const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: "SRM MAD Club" 
  });
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: "About Us | SRM MAD Club" 
  });
})
router.get('/achievements', (req, res) => {
  res.render('achievements', {
    title: "Our achievements | SRM MAD Club" 
  });
})
router.get('/activities', (req, res) => {
  res.render('activities', {
    title: "Activities | SRM MAD Club" 
  });
})
router.get('/contact', (req, res) => {
  res.render('contact', {
    title: "Contact Us | SRM MAD Club" 
  });
})
router.get('/dev', (req, res) => {
  res.render('dev', {
    title: "Developers | SRM MAD Club" 
  });
})
router.get('/guide', (req, res) => {
  res.render('guide', {
    title: "User Guide | SRM MAD Club" 
  });
})
router.get('/history', (req, res) => {
  res.render('history', {
    title: "Our History | SRM MAD Club" 
  });
})
router.get('/join', (req, res) => {
  res.render('join', {
    title: "Join Us! | SRM MAD Club" 
  });
})
router.get('/mission', (req, res) => {
  res.render('mission', {
    title: "Our Mission | SRM MAD Club" 
  });
})
router.get('/project', (req, res) => {
  res.render('project', {
    title: "Our Projects | SRM MAD Club" 
  });
})
router.get('/resources', (req, res) => {
  res.render('resources', {
    title: "Resources | SRM MAD Club" 
  });
})
router.get('/team', (req, res) => {
  res.render('team', {
    title: "Our Team | SRM MAD Club" 
  });
})
router.get('/update', (req, res) => {
  res.render('update', {
    title: "Latest Updates | SRM MAD Club" 
  });
})



module.exports = router;