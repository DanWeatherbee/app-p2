var index_zero=0,index_one=1,bio={name:"Dan Weatherbee",role:"Front End Ninja",contacts:{mobile:"250-307-6272",email:"tinahelf@jedi-clan.com",github:"/danweatherbee",linkedin:"/danweatherbee",location:"Vernon BC Canada"},welcomeMessage:"Front End Ninja",skills:["Programmer","Designer","Developer"],biopic:"images/small/ninja.png"},education={schools:[{name:"Okanagan College",location:"Vernon, BC",degree:"Math Upgrade",majors:["Math 72"],dates:"2014 2015",url:"Sample Link"},{name:"Prince George Senior Secondary",location:"Prince George, BC",degree:"Diploma",majors:["Grade Twelve"],dates:"1977 1979",url:"Sample Link"}],onlineCourses:[{title:"Intro to Programming Nanodegree",school:"udacity",date:"2015 2016",url:"www.udacity.com"},{title:"Front-End Web Developer Nanodegree",school:"Udacity",date:"2016 2016",url:"Front End Resume Builder"},{title:"JavaScript Basics",school:"Udacity",date:"2016 2016",url:"Java Script Resume Builder"}]},work={jobs:[{employer:"Udacity",title:"Course Developer",location:"Mountain View, CA",dates:"Feb 2014 - Current",description:"Sample data"},{employer:"LearnBIG",title:"Software Engineer",location:"Seattle, WA",dates:"May 2013 - Jan 2014",description:"Sample data"},{employer:"LEAD Academy Charter High School",title:"Science Teacher",location:"Nashville, TN",dates:"Jul 2012 - May 2013",description:"Sample data"},{employer:"Stratford High School",title:"Science Teacher",location:"Nashville, TN",dates:"Jun 2009 - Jun 2012",description:"Sample data"}]},projects={project:[{title:"<a href='https://resume-1231.appspot.com/' id='a-link'>Stage 5 - Javascript Resume Builder</a>",dates:"Feb 24 2016",description:"This is my resume builder Project. I built it off the Javascript Basics Course",images:["https://placekitten.com/700/700","https://placekitten.com/700/700"]},{title:"<a href='https://cyberdans-project.appspot.com/' id='a-link'>Stage 4 - Allow Comments</a>",dates:"2016",description:"This is my Allow Comments Project. This app uses the datastore.",images:["https://placekitten.com/450/450","https://placekitten.com/600/600"]}]};bio.display=function(){formattedBioName=HTMLcontactGeneric.replace("%data%",bio.name),formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile),formattedEmail=HTMLemail.replace("%data%",bio.contacts.email),formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github),formattedlinkedin=HTMLlinkedin.replace("%data%",bio.contacts.linkedin),formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);var e=formattedMobile+formattedEmail+formattedGithub+formattedlinkedin+formattedLocation;$("#topContacts").append(e),$("#footerContacts").append(e),formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic),formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage),$("#header").append(formattedBiopic),$("#header").append(formattedWelcomeMsg),$("#header").append(HTMLskillsStart);for(var a=bio.skills.length,t=0;a>t;t++)formattedSkill=HTMLskills.replace("%data%",bio.skills[t]),$("#skills").append(formattedSkill);formattedName=HTMLheaderName.replace("%data%",bio.name),formattedRole=HTMLheaderRole.replace("%data%",bio.role),$("#header").prepend(formattedRole),$("#header").prepend(formattedName)},bio.display(),education.display=function(){education.schools.forEach(function(e){$("#education").append(HTMLschoolStart),formattedSchoolName=HTMLschoolName.replace("%data%",e.name),formattedSchoolDegree=HTMLschoolDegree.replace("%data%",e.degree),formattedSchoolLocation=HTMLschoolLocation.replace("%data%",e.location),formattedSchoolMajors=HTMLschoolMajor.replace("%data%",e.majors),formattedSchoolDates=HTMLschoolDates.replace("%data%",e.dates),formattedSchoolUrl=HTMLschoolUrl.replace("%data%",e.url),$(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree+formattedSchoolLocation+formattedSchoolMajors+formattedSchoolDates+formattedSchoolUrl)}),$("#education").append(HTMLonlineClasses),education.onlineCourses.forEach(function(e){$("#education").append(HTMLschoolStart),formattedOnlineTitle1=HTMLonlineTitle.replace("%data%",e.title),formattedOnlineSchool1=HTMLonlineSchool.replace("%data%",e.school),formattedOnlineDates1=HTMLonlineDates.replace("%data%",e.date),formattedOnlineUrl1=HTMLonlineURL.replace("%data%",e.url),$(".education-entry:last").append(formattedOnlineTitle1+formattedOnlineSchool1+formattedOnlineDates1+formattedOnlineUrl1)})},education.display(),work.display=function(){work.jobs.forEach(function(e){$("#workExperience").append(HTMLworkStart),formattedEmployer=HTMLworkEmployer.replace("%data%",e.employer),formattedTitle=HTMLworkTitle.replace("%data%",e.title),formattedWorkLocation=HTMLworkLocation.replace("%data%",e.location),formattedEmployerTitle=formattedEmployer+formattedTitle,formattedDates=HTMLworkDates.replace("%data%",e.dates),formattedDescription=HTMLworkDescription.replace("%data%",e.description),$(".work-entry:last").append(formattedEmployerTitle+formattedWorkLocation+formattedDates+formattedDescription)})},work.display(),projects.display=function(){projects.project.forEach(function(e){$("#projects").append(HTMLprojectStart),formattedTitle=HTMLworkTitle.replace("%data%",e.title),formattedDates=HTMLprojectDates.replace("%data%",e.dates),formattedDescription=HTMLprojectDescription.replace("%data%",e.description),$(".project-entry:last").append(formattedTitle+formattedDates+formattedDescription),e.images.length>0&&(formattedImage1=HTMLprojectImage.replace("%data%",e.images[index_zero]),formattedImage2=HTMLprojectImage.replace("%data%",e.images[index_one]),formattedImage=formattedImage1+formattedImage2,$(".project-entry:last").append(formattedImage))})},projects.display(),$("#mapDiv").append(googleMap);
