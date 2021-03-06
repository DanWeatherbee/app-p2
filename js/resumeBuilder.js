// ------------------------------------ vars --------------------------------
var index_zero = 0;
var index_one = 1;
var bio = {
    "name": "Dan Weatherbee",
    "role": "Front End Ninja",
    "contacts": {
        "mobile": "250-307-6272",
        "email": "tinahelf@jedi-clan.com",
        "github": "/danweatherbee",
        "linkedin": "/danweatherbee",
        "location": "Vernon BC Canada"
    },
    "welcomeMessage": "Front End Ninja",
    "skills": ["Programmer", "Designer", "Developer"],
    "biopic": "images/small/ninja.png"
};

var education = {
    "schools": [{
        "name": "Okanagan College",
        "location": "Vernon, BC",
        "degree": "Math Upgrade",
        "majors": ["Math 72"],
        "dates": "2014 2015",
        "url": "Sample Link"
    }, {
        "name": "Prince George Senior Secondary",
        "location": "Prince George, BC",
        "degree": "Diploma",
        "majors": ["Grade Twelve"],
        "dates": "1977 1979",
        "url": "Sample Link"
    }],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "udacity",
        "date": "2015 2016",
        "url": "www.udacity.com"
    }, {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016 2016",
        "url": "Front End Resume Builder"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "date": "2016 2016",
        "url": "Java Script Resume Builder"
    }]
};

var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Sample data"
    }, {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Sample data"
    }, {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Sample data"
    }, {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Sample data"
    }]
};

var projects = {
    "project": [{
        "title": "<a href='https://resume-1231.appspot.com/' id='a-link'>" +
            "Stage 5 - Javascript Resume Builder</a>",
        "dates": "Feb 24 2016",
        "description": "This is my resume builder Project." +
            " I built it off the Javascript Basics Course",
        "images": ["https://placekitten.com/700/700", "https://placekitten.com/700/700"]
    }, {
        "title": "<a href='https://cyberdans-project.appspot.com/' id='a-link'>" +
            "Stage 4 - Allow Comments</a>",
        "dates": "2016",
        "description": "This is my Allow Comments Project." +
            " This app uses the datastore.",
        "images": ["https://placekitten.com/450/450", "https://placekitten.com/600/600"]
    }]
};

bio.display = function() {
    formattedBioName = HTMLcontactGeneric.replace("%data%", bio.name);
    formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedlinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
    formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    // created a variable to save on repetition
    var formattedArray = (formattedMobile + formattedEmail + formattedGithub + formattedlinkedin + formattedLocation);
    $("#topContacts").append(formattedArray);
    $("#footerContacts").append(formattedArray);
    formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMsg);

    // create a div
    $("#header").append(HTMLskillsStart);
    // my reference for this                        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

    var lenght_of_array = bio.skills.length;
    for (var i = 0; i < lenght_of_array; i++) {

        // format the data
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);

        // append the data
        $("#skills").append(formattedSkill);
    }

    formattedName = HTMLheaderName.replace("%data%", bio.name);
    formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
};

bio.display();

// Special thanks to the reviewer for clearing up my understanding of how this works.

education.display = function() {

    education.schools.forEach(function(school) {

        // create a div to hold each school
        $("#education").append(HTMLschoolStart);

        // format the data
        formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
        formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        formattedSchoolUrl = HTMLschoolUrl.replace("%data%", school.url);

        //append the data to the div created in this loop
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree +
            formattedSchoolLocation + formattedSchoolMajors + formattedSchoolDates + formattedSchoolUrl);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(online) {

        // create a div to hold each online course
        $("#education").append(HTMLschoolStart);

        // format the data
        formattedOnlineTitle1 = HTMLonlineTitle.replace("%data%", online.title);
        formattedOnlineSchool1 = HTMLonlineSchool.replace("%data%", online.school);
        formattedOnlineDates1 = HTMLonlineDates.replace("%data%", online.date);
        formattedOnlineUrl1 = HTMLonlineURL.replace("%data%", online.url);

        //append the data to the div created in this loop
        $(".education-entry:last").append(formattedOnlineTitle1 + formattedOnlineSchool1 +
            formattedOnlineDates1 + formattedOnlineUrl1);
    });
};
education.display();

work.display = function() {

    work.jobs.forEach(function(job) {

        // create div
        $("#workExperience").append(HTMLworkStart);

        // format data
        formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
        formattedEmployerTitle = formattedEmployer + formattedTitle;
        formattedDates = HTMLworkDates.replace("%data%", job.dates);
        formattedDescription = HTMLworkDescription.replace("%data%", job.description);

        // append the data
        $(".work-entry:last").append(formattedEmployerTitle + formattedWorkLocation + formattedDates +
            formattedDescription);
    });
};

work.display();

projects.display = function() {

    projects.project.forEach(function(item) {

        // create div
        $("#projects").append(HTMLprojectStart);

        // format the data
        formattedTitle = HTMLworkTitle.replace("%data%", item.title);
        formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        formattedDescription = HTMLprojectDescription.replace("%data%", item.description);

        // append the data
        $(".project-entry:last").append(formattedTitle +
            formattedDates + formattedDescription);

        // see if image exists
        if (item.images.length > 0) {

            // format data
            formattedImage1 = HTMLprojectImage.replace("%data%", item.images[index_zero]);
            formattedImage2 = HTMLprojectImage.replace("%data%", item.images[index_one]);
            formattedImage = formattedImage1 + formattedImage2;

            // append data
            $(".project-entry:last").append(formattedImage);
        }
    });
};

projects.display();
$("#mapDiv").append(googleMap);
