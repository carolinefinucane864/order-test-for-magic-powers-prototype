// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

// Called when answering question about whether NHS number is known
router.post('/magical-powers-answer', (req, res) => {

  // Make a variable and give it the value from 'nhsNumberKnown'
  const magicalPowers = req.session.data.magicalPowers

  // Check whether the variable matches a condition
  if (magicalPowers === 'Yes') {

    // Send user to a page where they’ll enter their NHS number
    res.redirect('/details')

  } else if (magicalPowers === 'No') {

    // Send user to a page where they can find their NHS number
    res.redirect('/ineligible')

  } else {

    // Send user back to the question page
    res.redirect('/symptomslist')

  }
})



module.exports = router
