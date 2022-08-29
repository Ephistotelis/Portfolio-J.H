import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectlistserviceService {
  projects:Array<any> = [{'projectName' : 'Skarkie',
  'description' : 'Sharkie is a small object-oriented Jump & Run game based on Javascript and HTML Canvas.',
  'image' : 'assets/image/project_img/sharkie_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Sharkie',
'web_app_url' : 'http://sharkie.joshua-herrmann.de/',
'technologie' : 'javascript'},
  {'projectName' : 'Pokédex',
  'description' : 'Pokédex based on the open Pokéapi v2. Build with REST API and Javascript. ',
  'image' : 'assets/image/project_img/pokemon_mockup.png',
    'github_url' : 'https://github.com/JoshuaHerrmann/Pokedex',
    'web_app_url' : 'http://pokedex.joshua-herrmann.de/',
  'technologie' : 'javascript'},
  {'projectName' : 'Portfolio',
  'description' : 'My own Portfolio is completely built with Angular. I gained a lot of experience in coding and maintenance.',
  'image' : 'assets/image/project_img/portfolio_mockup.png',
  'github_url' : 'https://github.com/JoshuaHerrmann/Portfolio-J.H',
'web_app_url' : '#',
'technologie' : 'angular'},
{'projectName' : 'Slack Clone',
'description' : 'A group project where we worked with Angular and Firebase. Gained a lot of experience coding in a team and debugging together.',
'image' : 'assets/image/project_img/slackclone_mockup.png',
'github_url' : 'https://github.com/AndreHehn/slackclone',
'web_app_url' : 'http://slackclone.joshua-herrmann.de/',
'technologie' : 'angular'},
/* {'projectName' : 'Transport App',
  'description' : 'Transport app for hospital',
  'image' : 'assets/image/project_img/mockup_placeholder.png',
  'github_url' : 'https://github.com/Ephistotelis',
'web_app_url' : '#'} */]
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
aboutMe:Array<any> = [
  {'headerH3':{
    'eng':'Hi I am Joshua Herrmann,',
    'de':'Hey! Ich bin Joshua Herrmann,'
  },
'headerP1':{
  'eng':'a Frontend Developer based in Germany!',
  'de':'ein Frontend Entwickler, wohnhaft in Deutschland!'
},
'headerP2':{
  'eng':'You`re welcome to learn more about my story:',
  'de':'Du bist willkommen mehr über meine Geschichte zu erfahren:'
}},
  {'titel': {
            'eng':'That is me:',
            'de':'Das bin ich:'},
    'text': {
      'eng':'My name is Joshua Herrmann, I am 24 years young, raised, and living in Hannover/Lower Saxony. By graduating an FSJ in 2020, I completed my high-school diploma. At the end of 2021, I started studying social work. After one semester I realized, that this isn`t the way I want to go. Meanwhile, at this time, I engaged myself due to programming and started a self-study at the Developer Akademie. To fulfill my dream of getting a programmer, I am currently working full-time in a hospital in Hannover.',
      'de':'Mein Name ist Joshua Herrmann, ich bin 24 Jahre jung, aufgewachsen und wohnhaft in Hannover/Niedersachsen. 2020 habe ich durch das Absolvieren eines FSJ`s meine allgemeine Fachhochschulreife erlangt. Ende 2021 begann ich mein Studium im Bereich der Sozialen Arbeit. Nach einem Semester habe ich jedoch die Erfahrung gemacht, dass das Studium in diesem Bereich nichts für mich ist. Stattdessen habe ich mich in dieser Zeit ebenfalls mehr mit dem Programmieren befasst und mich für ein Selbststudium bei der Developer Akademie entschieden. Um mir diesen Wunsch zu erfüllen und finanzieren, arbeite ich Vollzeit in einem Krankenhaus in Hannover.'
    }},
    {'titel': {
      'eng':'How did I get into coding?',
      'de':'Wie kam ich zum Programmieren?'},
'text': {
'eng':'Since my youth, I am interested in video games which has caused me to spend a lot of time in front of the computer. Due to this hobby, I worked as a server manager at one of the biggest DayZ gaming server in the world in 2019. Besides leading a 20-head strong team, and caring about a community with more than 9000 members, I also came in contact with technical themes. I gained my first experience working with JSONs and functions. I already tried to learn coding by self-studying, but I failed because of my mindset at this time. Even tho I never lost interest in programming, that is why I decided to give it another try in 2022. Before I started to read blogs and watch tutorials, I knew at first I had to fix my mindset to be successful.',
'de':'Seit meiner Jugend bin ich an Videospielen interessiert und habe daher einige Zeit meines Lebens vor dem Computer verbracht. Durch dieses Hobby kam ich 2019 in die Position des Servermanagers von einem der größten DayZ Gaming Server der Welt. Neben dem Leiten eines 20 Kopf großen Teams, dem Pflegen einer Spielerbase von über 9000 Membern, kamen ebenfalls technische Arbeiten auf mich zu. Dort habe ich meine ersten Erfahrungen mit JSON`s und Funktionen gemacht. Schon damals versuchte ich mir das Programmieren autodidaktisch beizubringen, jedoch scheiterte ich zu dieser Zeit am falschen Mindset. Da es mich allerdings immer wieder in diese Richtung zog und mein Interesse daran, das Programmieren zu erlernen nie verschwand, beschloss ich es 2022 erneut zu probieren. Bevor ich meine die ersten Beiträge und Tutorials ansah, wusste ich, dass ich aus meinem vergangenen Versuch lernen musste. Daher war das A und O für mich zunächst das richtige Mindset zu bekommen.'
}},
{'titel': {
  'eng':'What is thrilling me with coding?',
  'de':'Was reizt mich am Programmieren?'},
'text': {
'eng':'With the correct mindset, I started to love Debugging, a deep understanding of themes, languages, and frameworks, as well as building a project up from the first line. Due to gaming over years, I got no problems with staying focused and working multiple hours in a row. Since I started programming, I have almost stopped gaming completely. Instead, I spend my time to code and learning new themes. It is my dream to work in a job, where I am getting demanded, which is future-oriented and at first, just makes me happy. By working as a programmer this dream is fulfilled.',
'de':'Mit dem richtigen Mindset habe ich das Debuggen, das tiefere Verstehen der Thematiken, Sprachen und Frameworks und das Aufbauen großer Projekte von der ersten Zeile Code an lieben gelernt. Durch das jahrelange Zocken habe ich kein Problem damit, mehrere Stunden lang vor dem Computer zu sitzen und konzentriert zu arbeiten. Das Programmieren hat das Zocken bei mir nahezu komplett abgelöst. Mein Wunsch, einen Job auszuüben, der mich fordert, abwechslungsreich ist, zukunftsorientiert ist und vor allem, mir sehr viel Freude bereitet, ist mit dem Karriereweg des Programmierers erfüllt.'
}},
{'titel': {
  'eng':'What are my goals?',
  'de':'Was sind meine Ziele?'},
'text': {
'eng':'After completing my frontend part at the Developer Akademie, the next step is to get my first IT job. Meanwhile, I am working towards completing my backend part as well. In interaction with the self-study courses and the experience I am gaining at my job, the goal is to become a professional full-stack developer. My long-term motivation is to focus and specialize in backend technologies. Especially IT-Security is a theme I am very interested in.',
'de':'Mit dem Abschluss des Front-End Teil der Developer Akademie, liegt mein Fokus zunächst darauf, meinen ersten Job in der IT zu erlangen. Während dessen bin ich dabei, den Back-End Teil zu absolvieren. Zusammen mit der Erfahrung in meinem Job, sollen meine Fähigkeiten als Fullstack Developer befestigt werden. Auf lange Sicht ist mein bisheriges Ziel, mich auf Back-End Technologien zu spezialisieren. Vor allem die IT-Security hat es mir angetan.'
}}
]
  constructor() { }
}
