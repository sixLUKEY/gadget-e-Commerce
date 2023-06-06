let colleagues =[
{
    image: "https://i.postimg.cc/7L28x3Z7/IMG-3453.jpg",
    name:"Sisipho Pepengweni",
    position: "Chief Executive Officer",
    desc:" Ms Pepengweni is the CEO of Geeks 4 Gadgets.She is a veteran in retail and e-commerce, has held a number of executive leadership positions and been successful in building firms that are leaders in their respective industries.",
},

{
    image: "https://i.postimg.cc/N0SgGC4g/C12-Abdoelmaaliek-Samaai-3.jpg",
    name:"Abdoelmaaliek Samaai",
    position: "Fullstack Developer",
    desc:"",
},

{
    image: "https://i.postimg.cc/fWvv6G5Q/C12-C2-Abenathi-Sindapi-2.jpg",
    name:"Abenathi Sindaphi",
    position: "Chairperson",
    desc:"",
},

{
    image: "https://i.postimg.cc/brFg4bPF/Screenshot-20230505-103824.jpg",
    name:"Amber-Kaye Africa",
    position: "Junior Developer",
    desc:"",
}
,
{
    image: "https://i.postimg.cc/RFsjdWWX/C12-C1-Antonio-Torre-1.jpg",
    name:"Antonio Tone",
    position: "Chief Marketing officer",
    desc:"Mr Tone is the Chief Marketing Officer of BigCommerce. He has several years of experience scaling high-growth companies with a focus on enterprise SaaS. In his multiple executive roles, he's been responsible for setting company vision and strategy, driving business performance through organic growth, global expansion and M&A, and navigating corporate exits."
},

{
    image: "https://i.postimg.cc/Kvr6jcbq/IMG-20200928-WA0082-1.jpg",
    name:"Azinisikhona Siyalana",
    position: "Senior Technician",
    desc:"",
},

{
    image: "https://i.postimg.cc/NFbxhnh4/C12-C2-Connor-Winkworth.jpg",
    name:"Connor Winkworth",
    position: "Vice President of Digital Marketing",
    desc:"Mr Winkworth is the Vice President of Digital Marketing of Geeks 4 Gadgets.He brings more than 20 years of management experience spanning investments, joint ventures, business and corporate development.",
},

{
    image: "https://i.postimg.cc/TYVKPbhz/IMG20220917152613.jpg",
    name:"Jadee Paulse",
    position: "Chief Strategy officer",
    desc:"Ms Paulse is the Chief Strategy officer of Geeks 4 Gadgets. She has more than 20 years experience in senior operations and finance roles at multi-billion dollar organizations.",
},

{
    image: "https://i.postimg.cc/ZqJFqjwy/C12-Luke-Evertson-1.jpg",
    name:"Luke Evertson",
    position: "Chief Marketing Director",
    desc:" Mr Evertson is the Chief Marketing Director at Geeks 4 Gadgets. He has 20+ years of experience scaling high growth companies. In his multiple executive roles, he's been responsible for setting company vision and strategy, driving business performance through organic growth, global expansion and navigating corporate exits. ",
},

{
    image: "https://i.postimg.cc/T3ZdfHQT/C12-Tara-Snell-2.jpg",
    name: "Tara Snell",
    position: "Chief Financial officer",
    desc: "Ms Snell Chief Financial officer of Geeks 4 Gadgets. She has been instrumental in the acquisition or listing of her 4 previous companies and brings extensive experience in finance, planning, and business transactions."
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

// function teamMembers() {
//     const team = document.getElementById("team");
//     colleagues.forEach((member) => {
//       team.innerHTML = `
//       <img src="${member.image}" alt="${member.name}">
//       <h5>${member.name}</h5>
//       <p>${member.position}</p>
//       <p>${member.desc}</p>
//       `;  
//     });
// }
// teamMembers();


