-- INSERT ACTOR
INSERT INTO actor
(fName, lName)
VALUES
('alan','young'),
('wayne', 'allwine'),
('dick', 'billingsley'),
('will', 'ryan'),
('patricia', 'parris'),
('daws', 'butler'),
('don', 'messick'),
('marilyn', 'schreffler'),
('hall', 'smith'),
('janet', 'waldo'),
('jimmy', 'durante'),
('jackie', 'vernon'),
('june', 'foray'),
('billy', 'wolfe'),
('paul', 'frees'),
('peter', 'robbinson'),
('cathy', 'steinberg'),
('christopher', 'shea'),
('chris', 'doran'),
('sally', 'dryer'),
('susan', 'blu'),
('jim', 'staahl'),
('cam', 'clarke'),
('kathleen', 'bar'),
('philip', 'hayes'),
('dave', 'goelz'),
('steve', 'whitmire'),
('katheryn', 'mullen'),
('jerry', 'nelson'),
('richard', 'hunt'),
('tom', 'hanks'),
('leslie', 'zemeckis'),
('nona', 'gaye'),
('eddie', 'deezen'),
('peter', 'scolari'),
('forest', 'whitaker'),
('keegan', 'key'),
('hugh','bonneville'),
('anika', 'rose'),
('madalen', 'mills'),
('billy', 'thornton'),
('tony', 'cox'),
('brett', 'kelly'),
('lauren', 'graham'),
('lauren', 'tom'),
('billy', 'barretta'),
('eric', 'jacobson'),
('david', 'arquette'),
('oliver', 'hudson'),
('kimberly', 'williams'),
('jesse', 'gervasi'),
('david', 'kohlsmith'),
('judah', 'lewis'),
('christina', 'millian'),
('erin', 'kurpluk'),
('hilda', 'doherty'),
('jason', 'schombing'),
('james', 'kot'),
('danny', 'glover'),
('gabrielle', 'union'),
("mo'nique", 'hicks'),
('kimberly', 'elise'),
('romany', 'malco'),
('rose', 'mclver'),
('ben', 'lamb'),
('alice', 'krige'),
('honor', 'kneafsey'),
('sarah', 'douglas'),
('thomas', 'cadot'),
('jaime', 'callica'),
('thalia', 'campbell'),
('daneva', 'dansby'),
('jeff', 'gonek'),
('angela', 'bassett'),
('jennifer', 'hudson'),
('tyreese', 'gibson'),
('jacob', 'latimore'),
('queen', 'latifah'),
('ll cool', 'j'),
('timothy', 'hutton'),
('giancarlo', 'esposito'),
('alicia', 'witt'),
('vang', 'rhames'),
('alfre', 'woodard'),
('jesika', 'reynolds'),
('mykelti', 'williamson'),
('johnathon', 'wallace'),
( 'tatyana', 'ali'),
('dondre', 'whitfield'),
('patti', 'laBelle'),
('amanda', 'brooks'),
('tia', 'mowry'),
('mark', 'taylor'),
('markeda', 'mckay'),
('rothaford', 'gray'),
('jackie', 'richardson'),
('conequa', 'martin-green'),
('darlene', 'love'),
('amarr', 'wooten'),
('deysha', 'nelson'),
('onikosi', 'abisoye'),
('lateef', 'adedimeji'),
('soledayo', 'adegbite'),
('jude', 'chukwuka'),
('anthony', 'anderson'),
('tracee', 'ross'),
('yara', 'shahidi'),
('marcus', 'scribner'),
('miles', 'brown'),
('ashli', 'auguillard'),
('donna', 'biscoe'),
('cocoa', 'brown'),
('pynni', 'keaton'),
('hallee', 'hirsh'),
('spencer', 'breslin'),
('hallie', 'todd'),
('brenda', 'song'),
('john', 'salley'),
('jennifer', 'freeman'),
('garrett', 'watson'),
('erica', 'duke'),
('john', 'richardson'),
('daphne', "o'neal"),
('chevy', 'chase'),
('beverly', "d'angelo"),
('juliette', 'lewis'),
('johnny', 'galecki'),
('john', 'randolph'),
('zarrin', 'darnell-martin'),
('henderson', 'wade'),
('scott', 'thompson'),
('josephine', 'buettner'),
('franco', 'presti'),
('richard', 'attenborough'),
('elizabeth', 'perkins'),
('dylan', 'mcsermott'),
('j.t.', 'walsh'),
('james', 'remar'),
('mila', 'kunis'),
('kristen', 'bell'),
('kathryn', 'hahn'),
('christine', 'baranski'),
('susan', 'sarandon');

-- INSERT DIRECTOR
INSERT INTO director 
(director)
VALUES
('burney mattinson'),
('gerald baldwin'),
('hawley pratt'),
('gerry chiniquy'),
('ray patterson'),
('jules bass'),
('author rankin jr'),
('bill melendez'),
('phil roman'),
('eric till'),
('robert zemeckis'),
('david talbert'),
('terry zwigoff'),
('kirk thatcher'),
('clay kaytis'),
('ron lagomarsino'),
('alex zamm'),
('bosede williams'),
('kasi lemmons'),
('wayne wang'),
('robert townsend'),
('ron oliver'),
('alfons adetuyo'),
('lesli small'),
('kunle afolayan'),
('elliot hegarty'),
('bobby yah'),
('greg beeman'),
('nick lyson'),
('jeremiah chechik'),
('marco deufemia'),
('les mayfield'),
('jon lucas'),
('scott moore');

-- INSERT STREAMING PLATFORM table
INSERT INTO streaming_platform 
(streamPlat) 
VALUES
('disney plus'),
('prime video'),
('amazon'),
('hulu'),
('netflix'),
('peacock'),
('paramount plus'),
('tnt'),
('tubi'),
('hbo'),
('apple tv'),
('pluto tv'),
('lifetime'),
('plex'),
('roku tv');

-- INSERT PRODUCTION 
-- insert into "production" is the table name
INSERT INTO production
(production)
VALUES 
('walt disney production'),
('hannah barbera production'),
('rankin bass production'),
('lee mendelson'),
('sfm entertainmens'),
('the jim henson company'),
('warner bros'),
('golden girl'),
('columbia pictures'),
('jim henson company'),
('1492 pictures'),
('abc family'),
('will packer production'),
('motion picture coporation of america'),
('lifetime'),
('sankofa african american theater company'),
('image movers'),
('we heart holidays productions'),
('hallmark hall of fame production'),
('cinflix media'),
('octet production'),
('megamind media'),
('the black santa production'),
('fox entertainment studio'),
('once upon a time films'),
('great american family'),
('hughes entertainment'),
('brain power studio'),
('premier theater production'),
('stx entertainment');


-- INSERT PROGRAM table
INSERT INTO program 
(title, yr_released, runtime, production_id, format, program_rating, rating, img, description)
VALUES
("mickey's christmans carol", '1963', '00:00:26', 1, 'animation', 'G', 8, "mickey's christmas carol.jpg", 'The classic Disney animated characters play the roles in this animated retelling of the Charles Dickens masterpiece.'),

("yogi's first christmas", '1980', '00:01:38', 2, 'animation', 'TV-G', 7, "yogi's first christmas.jpg", "Yogi, Boo Boo and Cindy are awakened from hibernation and join their friends' Christmas activities while interfering with two villains' efforts to ruin the holiday."),

('frosty the snowman', '1969', '00:00:25', 3, 'animation', 'TV-G', 7, 'frosty the snowman.jpg', "A living snowman and a little girl struggle to elude a greedy magician who is after the snowman's magic hat."),

('a charlie brown christmas', '1965', '00:00:25', 4, 'animation', 'TV-G', 8, 'a charlie brown christmas.jpg', 'Depressed at the commercialism he sees around him, Charlie Brown tries to find a deeper meaning to Christmas.'),

('grandma got run over by a reindeer', '2000', '00:00:51', 5, 'animation', 'TV-G', 4, 'grandma got run over by a reindeer.jpg', 'A young boy sets out to find his missing grandmother and prove that Santa Claus is real.'),

('the christmas toy', '1986', '00:00:50', 6, 'stop motion', 'TV-G', 7, 'the christmas toy.jpg', "The toys in the playroom of the Jones household magically come to life when their owners aren't looking. On Christmas Eve, as the toys eagerly await the arrival of a new toy, Rugby the tiger plots to make sure he remains the favorite toy."),

('the polar express', '2004', '00:01:40', 7, 'animation', 'TV-G', 6, 'the polar express.jpg', 'On Christmas Eve, a young boy embarks on a magical adventure to the North Pole on the Polar Express, while learning about friendship, bravery, and the spirit of Christmas.'),

('jingle jangle: a christmas journey', '2020', '00:02:02', 8, 'stop motion', 'PG', 6, 'jingle jangle a christmas journey.jpg', 'An imaginary world comes to life in a holiday tale of an eccentric toymaker, his adventurous granddaughter, and a magical invention that has the power to change their lives forever.'),

('bad santa', '2003', '00:01:43', 9, 'stop motion', 'R', 7, 'bad santa.jpg', 'A miserable conman and his partner pose as Santa and his Little Helper to rob department stores on Christmas Eve. But they run into problems when the conman befriends a troubled kid.'),

("it's a very merry muppet christmas movie", '2002', '00:01:40', 10, 'stop motion', 'TV-G', 5, "it's a very merry muppet christmas movie.jpg", 'Bank owner Miss Bitterman plots to seize the Muppet Theatre and turn it into a nightclub. She tricks Pepe into handing over the only copy of the original contract, then alters it so the Muppets have little time to repay their debt. While rushing to stage a Christmas show, the troupe makes sacrifices and raises the money needed to save their theater.'),

('the christmas chronicles', '2018', '00:01:44', 11, 'stop motion', 'PG', 7, 'the christmas chronicles.jpg', 'The story of sister and brother, Kate and Teddy Pierce, whose Christmas Eve plan to catch Santa Claus on camera turns into an unexpected journey that most kids could only dream about.'),

('snowglobe', '2007', '00:01:30', 12, 'stop motion', 'TV-PG', 5, 'snowglobe.jpg', 'A young woman discovers a Christmas-themed dreamworld inside a magical snowglobe.'),

('almost christmes', '2016', '00:01:51', 13, 'stop motion', 'PG-13', 6, 'almost christmas.jpg', 'A dysfunctional family gathers for their first Christmas since their mother died.'),

('a christmas prince', '2017', '00:01:32', 14, 'live action', 'TV-PG', 5, 'a christmas prince.jpg', 'When a reporter goes undercover as a tutor to get the inside scoop on a playboy prince, she gets tangled in some royal intrigue and ends up finding love - but will she be able to keep up her lie?'),

('merry liddle christmas', '2019', '00:01:27', 15, 'live action', 'TV-G', 5, 'merry liddle christmas.jpg', 'A woman trying to get her dysfunctional family to look picture-perfect for the holidays falls in love with her neighbor amid the chaos.'),

('black nativity', '2013', '00:01:33', 16, 'live action', 'PG', 4, 'black nativity.jpg', 'A street-wise teen from Baltimore who has been raised by a single mother travels to New York City to spend the Christmas holiday with his estranged relatives, where he embarks on a surprising and inspirational journey.'),

('last holiday', '2006', '00:01:52', 17, 'live action', 'PG-13', 6, 'last holiday.jpg', 'Georgia, who leads a life full of unfulfilled desires, is left shocked when she discovers her terminal illness. Soon, she quits her job, gathers her savings and sets out on a luxurious trip to Europe.'),

('holiday heart', '2000', '00:01:36', 18, NULL, 'R', 7, 'holiday heart.jpg', 'A drag queen takes in a drug addict and her daughter and helps raise the daughter.'),

('christmas everlasting', '2018', '00:01:25', 19, NULL, 'TV-PG', 6, 'christmas everlasting.jpg', 'A hotshot lawyer returns to her childhood home following a death in the family.'),

('miracle in motor city', '2021', '00:01:27', 20, 'live action', 'TV-PG', 5, 'miracle in motor city.jpg', 'Amber finds herself in trouble when she promises to create the Christmas Pageant no one will forget, with the special appearance of Motown Legend Smokey Robinson. Eddie and her will go to great extent reconnecting to make it happen.'),

('holiday rush', '2019', '00:01:32', 21, 'live action', 'TV-PG', 5, 'holiday rush.jpg', 'After his sudden firing, a popular radio DJ moves in with his aunt, bringing along his four spoiled children, and a plan to return to the airwaves.'),

('a naija christmas', '2021', '00:02:01', 22, NULL, 'TV-14', 5, 'a naija christmas.jpg', "A mother's Christmas wish - and the grand prize that comes with it - sets off a fierce competition between her sons."),

('black santa white christmas', '2014', '00:00:22', 23, 'live action', 'TV-PG', 7, 'black santa white christmas.jpg', "Certain that his annual office Christmas party needs a black Santa, Dre goes out of his way to fill the red suit, even though the head of HR already got the job. Meanwhile, Bow doesn't feel like competing with Ruby over who cooks the big holiday dinner."),

('a very merry beauty salon', '2024', '00:01:27', 24, 'live action', 'TV-PG', 6, 'a very merry beauty salon.jpg', "Sienna is preparing for Atlanta's Tinsel Ball, where she will be honored for her charitable work. The annual event takes a glamourous turn with the arrival of Lawrence, whose family's wine brand is now co-sponsoring the Ball."),

('the ultimate christmas present', '2000', '00:01:25', 25, 'live action', 'TV-G', 5, 'the ultimate christmas present.jpg', 'A girl steals a weather machine from Santa Claus to make a snow day; the machine breaks and causes an out-of-control snowstorm.'),

('aisle be home for christmas', '2022', '00:01:25', 26, 'animation', 'TV-PG', 5, 'aisle be home for christmas.jpg', 'Two exes finally reconnect when a snowstorm leaves them stranded in a superstore without mobile service or Wi-Fi just before Christmas.'),

("national lampoon's christmas vacation", '1989', '00:01:37', 27, 'live action', 'PG-13', 7, "national lampoon's christmas vacation.jpg", "The Griswold family's plans for a big family Christmas predictably turn into a big disaster."),

('snowbound for christmas', '2019', '00:01:24', 28, 'live action', 'PG', 5, 'snowbound for christmas.jpg', 'Marketing exec lands a spot on a big project but before the presentation, a snowstorm traps her and her boss at a resort where they realize there is more to their relationship than just business.'),

('miracle on 34th street', '1994', '00:01:54', 29, 'live action', 'PG', 6, 'miracle of 34th street.jpg', 'A lawyer and a little girl must prove that a man claiming to be Santa Claus is the real thing.'),

('a bad moms christmas', '2017', '00:01:44', 30, 'live action', 'R', 5, 'a bad moms christmas.jpg', 'As their own mothers drop in unexpectedly, our three under-appreciated and over-burdened moms rebel against the challenges and expectations of the Super Bowl for mothers: Christmas.');


 
