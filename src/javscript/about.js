let colleagues =[
{
    image: "https://i.postimg.cc/7L28x3Z7/IMG-3453.jpg",
    name:"Sisipho Pepengweni",
    position: "Chief Executive Officer",
    desc:" Ms Pepengweni is the CEO of Blade Tech.She is a veteran in retail and e-commerce, has held a number of executive leadership positions and been successful in building firms that are leaders in their respective industries.",
},

{
    image: "https://i.postimg.cc/N0SgGC4g/C12-Abdoelmaaliek-Samaai-3.jpg",
    name:"Abdoelmaaliek Samaai",
    position: "Fullstack Developer",
    desc:"Mr Samaai is the fullstack developer of Blade Tech.He is responsible for working on both front-end and back-end development processes. He designs, develops, and maintains ,fully-fledged and functioning platforms with databases or servers.",
},

{
    image: "https://i.postimg.cc/fWvv6G5Q/C12-C2-Abenathi-Sindapi-2.jpg",
    name:"Abenathi Sindapi",
    position: "Chairperson",
    desc:"Mr Sindapi is the Chairperson of Blade Tech. He ensures that the board is effective in setting and implementing the organisation's direction and strategy.",
},

{
    image: "https://i.postimg.cc/brFg4bPF/Screenshot-20230505-103824.jpg",
    name:"Amber-Kaye Africa",
    position: "Junior Developer",
    desc:"Ms Africa is A Junior Developer at Blade Tech. She is responsible for the technical aspects of the company's site, such as its performance, scalability, and security. She also often works closely with the Ms Snell to ensure that the store meets their business needs.",
}
,
{
    image: "https://i.postimg.cc/RFsjdWWX/C12-C1-Antonio-Torre-1.jpg",
    name:"Antonio Tone",
    position: "Chief Marketing officer",
    desc:"Mr Tone is the Chief Marketing Officer of Blade Tech. He has several years of experience scaling high-growth companies. In his multiple executive roles, he's been responsible for setting company vision and strategy, driving business performance through organic growth, global expansion and navigating corporate exits."
},

{
    image: "https://i.postimg.cc/Kvr6jcbq/IMG-20200928-WA0082-1.jpg",
    name:"Azinisikhona Siyalana",
    position: "Senior Technician",
    desc:"Mr Siyalana is the Senior Technician of Blade Tech. He identifies and delivers required hardware service levels according to organizational policies. Liaise with, and provide training and support to end users and staff on equipment operation and other issues. He installs, configures, tests, maintains, monitors, and troubleshoot end user and network hardware and other products.",
},

{
    image: "https://i.postimg.cc/NFbxhnh4/C12-C2-Connor-Winkworth.jpg",
    name:"Connor Winkworth",
    position: "Vice President of Digital Marketing",
    desc:"Mr Winkworth is the Vice President of Digital Marketing of Blade Tech.He brings more than 20 years of management experience spanning investments, joint ventures, business and corporate development.",
},

{
    image: "https://i.postimg.cc/TYVKPbhz/IMG20220917152613.jpg",
    name:"Jadee Paulse",
    position: "Chief Strategy officer",
    desc:"Ms Paulse is the Chief Strategy officer of Blade Tech. She has several years of experience in senior operations and finance roles at multi-billion dollar organizations.",
},

{
    image: "https://i.postimg.cc/ZqJFqjwy/C12-Luke-Evertson-1.jpg",
    name:"Luke Evertson",
    position: "Chief Marketing Director",
    desc:" Mr Evertson is the Chief Marketing Director at Blade Tech. He has 20+ years of experience scaling high growth companies. In his multiple executive roles, he's been responsible for setting company vision and strategy, driving business performance through organic growth, global expansion and navigating corporate exits. ",
},

{
    image: "https://i.postimg.cc/T3ZdfHQT/C12-Tara-Snell-2.jpg",
    name: "Tara Snell",
    position: "Chief Financial officer",
    desc: "Ms Snell Chief Financial officer of Blade Tech. She has been instrumental in the acquisition or listing of her 4 previous companies and brings extensive experience in finance, planning, and business transactions."
}
]

let displayTeam= document.getElementById("team");
colleagues.forEach((member) => {
    displayTeam.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${member.image}" alt="" style="width: 18rem;"/>
    <h5>${member.name}</h5>
    <p>${member.position}</p>
    <p>${member.desc}</p>
    
    </div>
    `
});
