const divisions = [
  {title:"Telecommunications, ICT & Network", short:"Telecommunications,<br>ICT &amp; Network", desc:"Telecommunications, communication services, ICT and network solutions — sale, supply, installation and maintenance of telecom equipment and related technologies.", icon:"⌁", cardDesc:"Telecommunications, communication services, ICT and network solutions — sale, supply, installation and maintenance of telecom equipment, cables and related technologies."},
  {title:"Energy, Power & Renewable Energy", short:"Energy, Power &amp;<br>Renewable Energy", desc:"Solar generation, renewable energy systems, and the design, installation and management of energy systems, power plants and distribution networks.", icon:"☼", cardDesc:"Solar generation, renewable energy systems, and the design, installation and management of energy systems, power plants and distribution networks."},
  {title:"Transport, Logistics & Haulage", short:"Transport, Logistics<br>&amp; Haulage", desc:"Transportation, logistics, haulage and carriage — ownership, operation, leasing and management of motor vehicles and transport equipment.", icon:"↗", cardDesc:"Transportation, logistics, haulage and carriage — ownership, operation, leasing and management of motor vehicles and transport equipment."},
  {title:"Real Estate & Property Services", short:"Real Estate &amp;<br>Property Services", desc:"Acquiring, developing, managing, leasing and selling land, buildings and real estate of every description, with property development and agency services.", icon:"⌂", cardDesc:"Acquiring, developing, managing, leasing and selling land, buildings and real estate of every description, with property development and agency services."},
  {title:"Media, Publishing & Communication", short:"Media, Publishing<br>&amp; Communication", desc:"Media operations, publishing, printing and distribution of newspapers, journals, magazines, newsletters and digital publications.", icon:"▤", cardDesc:"Media operations, publishing, printing and distribution of newspapers, journals, magazines, newsletters and digital publications."},
  {title:"Contracting, Procurement & Supply", short:"Contracting,<br>Procurement &amp; Supply", desc:"General contracting, procurement, importation, exportation, marketing, sales, distribution and supply of goods, equipment and merchandise.", icon:"⇄", cardDesc:"General contracting, procurement, importation, exportation, marketing, sales, distribution and supply of goods, equipment and merchandise."},
  {title:"Manufacturing & Industrial Services", short:"Manufacturing &amp;<br>Industrial Services", desc:"Manufacturing, processing, packaging and distribution of goods and products of various descriptions, independently or in association with partners.", icon:"⚙", cardDesc:"Manufacturing, processing, packaging and distribution of goods and products of various descriptions, independently or in association with partners."},
  {title:"Equipment, Machinery & Asset Services", short:"Equipment, Machinery<br>&amp; Asset Services", desc:"Buying, selling, leasing, hiring and distributing machinery, equipment, vehicles and commercial assets of every description.", icon:"▦", cardDesc:"Buying, selling, leasing, hiring and distributing machinery, equipment, vehicles and commercial assets of every description."},
  {title:"Financial, Investment & Corporate", short:"Financial, Investment<br>&amp; Corporate", desc:"Raising, borrowing, investing and managing funds, with financial, investment and corporate activities supporting the Group's objectives.", icon:"◈", cardDesc:"Raising, borrowing, investing and managing funds, with financial, investment and corporate activities supporting the Group's objectives."},
  {title:"Ancillary & Related Services", short:"Ancillary &amp; Related<br>Services", desc:"All other lawful businesses, services and transactions incidental, complementary or conducive to the attainment of the Group's objects.", icon:"＋", cardDesc:"All other lawful businesses, services and transactions incidental, complementary or conducive to the attainment of the Group's objects."}
];
const byId = id => document.getElementById(id);
let currentSlide = 0;
const dots = byId('slider-dots');
function showSlide(index){
  currentSlide = (index + divisions.length) % divisions.length;
  const d = divisions[currentSlide];
  byId('slide-index').innerHTML = `${String(currentSlide+1).padStart(2,'0')} <i>/ 10</i>`;
  byId('slide-number').textContent = String(currentSlide+1).padStart(2,'0');
  byId('slide-title').innerHTML = d.short;
  byId('slide-description').textContent = d.desc;
  [...dots.children].forEach((dot,i)=>{dot.classList.toggle('active',i===currentSlide);dot.setAttribute('aria-pressed',String(i===currentSlide));});
}
divisions.forEach((d,i)=>{
  const dot=document.createElement('button');
  dot.type='button';dot.setAttribute('aria-label',`Show industry ${i+1}: ${d.title}`);
  dot.addEventListener('click',()=>showSlide(i));dots.appendChild(dot);
  const card=document.createElement('article');
  card.className='business-card';
  card.innerHTML=`<div class="business-card-top"><span class="business-card-number">${String(i+1).padStart(2,'0')}</span><span class="business-icon" aria-hidden="true">${d.icon}</span></div><h3>${d.title}</h3><p>${d.cardDesc}</p><span class="coming-soon">Website coming soon</span>`;
  byId('business-grid').appendChild(card);
});
byId('slide-prev').addEventListener('click',()=>showSlide(currentSlide-1));
byId('slide-next').addEventListener('click',()=>showSlide(currentSlide+1));
showSlide(0);
// Touch-friendly swipe support for the hero slider.
let touchStartX = null;
const feature = document.querySelector('.hero-feature');
feature.addEventListener('touchstart',e=>{touchStartX=e.changedTouches[0].screenX;},{passive:true});
feature.addEventListener('touchend',e=>{if(touchStartX===null)return;const delta=e.changedTouches[0].screenX-touchStartX;if(Math.abs(delta)>45)showSlide(currentSlide+(delta<0?1:-1));touchStartX=null;},{passive:true});
const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
byId('year').textContent=new Date().getFullYear();
byId('contact-form').addEventListener('submit',e=>{
  e.preventDefault();
  const form=new FormData(e.currentTarget);
  const subject=encodeURIComponent('Website enquiry from '+form.get('name'));
  const body=encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\nCompany: ${form.get('company')||'Not provided'}\n\nMessage:\n${form.get('message')}`);
  byId('form-note').textContent='Opening your email app… If it does not open, email info@sillinkgroupd.com directly.';
  window.location.href=`mailto:info@sillinkgroupd.com?subject=${subject}&body=${body}`;
});
