const db = require('../server/db')
const {Word} = require('../server/db/models')

const paragraphs =
    `Lorem ipsum dolor amet taxidermy vape schlitz YOLO farm-to-table paleo master cleanse normcore gluten-free. Meggings food truck waistcoat microdosing subway tile distillery. Truffaut kogi kinfolk vinyl selvage 8-bit mumblecore skateboard small batch ramps pug. Aesthetic microdosing waistcoat YOLO taiyaki hoodie. Activated charcoal sustainable tbh hoodie distillery tumblr pok pok yr.

    Ennui gluten-free salvia ethical cardigan. Lyft green juice shoreditch, skateboard man bun etsy tumblr schlitz plaid cardigan. Semiotics affogato shoreditch man bun freegan hoodie. Meh williamsburg street art, edison bulb tbh yuccie hashtag beard 90's sartorial polaroid quinoa. Retro succulents franzen kogi coloring book af cronut cred, vegan drinking vinegar keffiyeh craft beer paleo synth leggings. Hammock everyday carry bespoke live-edge cred, hot chicken pork belly austin glossier.
    
    Farm-to-table forage hashtag, synth XOXO deep v coloring book pickled health goth intelligentsia la croix. Street art irony you probably haven't heard of them lomo photo booth kale chips echo park chillwave intelligentsia single-origin coffee semiotics art party umami tacos. Schlitz mustache selvage chambray post-ironic synth meggings, pork belly PBR&B. Tumblr pabst YOLO iPhone leggings. Gochujang retro taiyaki biodiesel iceland semiotics everyday carry kogi mlkshk, blue bottle raclette direct trade hella try-hard. Aesthetic keffiyeh bitters venmo wolf kickstarter neutra crucifix fam authentic edison bulb. Venmo bicycle rights YOLO tumblr.
    
    Adaptogen green juice crucifix, gentrify selvage vegan pop-up occupy bushwick taxidermy artisan helvetica plaid. Wolf blue bottle aesthetic put a bird on it iceland. Twee taxidermy fam kitsch shaman chia squid yuccie poke. Tacos normcore hella succulents distillery freegan tbh lo-fi narwhal trust fund food truck.
    
    Banjo squid tattooed kinfolk meditation. Vice readymade 8-bit ennui ethical waistcoat coloring book, pitchfork wolf microdosing fanny pack VHS roof party taxidermy squid. Schlitz succulents roof party, raclette unicorn echo park marfa chambray intelligentsia green juice biodiesel. Mumblecore ramps twee skateboard palo santo. Keytar crucifix before they sold out, dreamcatcher gentrify normcore cliche next level stumptown yuccie four loko. Unicorn vegan humblebrag, tattooed chia jianbing crucifix godard sartorial locavore.
    
    Gluten-free tofu hexagon poutine sriracha forage leggings quinoa. Af before they sold out activated charcoal blog jianbing chia leggings flannel. Lyft 90's shabby chic wolf, YOLO air plant schlitz taiyaki flexitarian tousled tilde gochujang banjo paleo normcore. Roof party iceland drinking vinegar, kickstarter artisan street art lyft literally. Pickled tofu edison bulb butcher selvage try-hard enamel pin cliche umami. Readymade you probably haven't heard of them four dollar toast knausgaard, quinoa aesthetic gochujang vice adaptogen edison bulb. Beard brooklyn art party cred, before they sold out echo park bushwick photo booth XOXO poutine skateboard green juice tumeric thundercats chicharrones.
    
    Kickstarter truffaut biodiesel poke. Tumeric meditation taxidermy, fingerstache vegan ugh pinterest vape tilde hexagon poke pitchfork. Meggings ennui hot chicken slow-carb plaid salvia post-ironic literally kickstarter glossier ugh enamel pin cronut. Raw denim fingerstache knausgaard cred direct trade disrupt glossier coloring book activated charcoal hot chicken. Authentic pop-up cliche lo-fi typewriter, pabst raclette wolf blue bottle paleo fam biodiesel.
    
    Bespoke portland neutra raclette, man bun DIY ugh poke knausgaard actually kickstarter tofu coloring book. Try-hard retro four loko, lumbersexual man braid cred XOXO gluten-free franzen yr enamel pin pickled bitters helvetica. Try-hard kickstarter poutine, sartorial taxidermy cliche roof party franzen freegan drinking vinegar readymade vexillologist. Bitters ethical tumblr health goth asymmetrical VHS chartreuse selfies pickled sustainable gastropub palo santo hoodie. Fingerstache adaptogen occupy stumptown. Four loko mumblecore hexagon ramps lo-fi gentrify photo booth fingerstache. Synth squid sriracha 90's thundercats you probably haven't heard of them pickled migas mumblecore deep v put a bird on it.
    
    Unicorn vegan lumbersexual PBR&B ethical, gentrify quinoa lomo hella truffaut plaid tofu tilde pickled. Cliche chartreuse skateboard 90's tumeric, bitters post-ironic jianbing. Yr skateboard kitsch enamel pin flannel. Portland organic before they sold out, lumbersexual iceland fixie leggings schlitz direct trade skateboard intelligentsia.
    
    Woke farm-to-table blog try-hard meggings dreamcatcher yuccie art party meh direct trade. Affogato disrupt tbh chillwave deep v, ramps normcore sartorial listicle hashtag quinoa brunch paleo kitsch messenger bag. Ramps blog umami tbh, man bun tofu pour-over polaroid tattooed. Four dollar toast taxidermy af austin VHS franzen chicharrones vinyl. +1 leggings occupy vegan farm-to-table ethical.
    
    Hot chicken occupy typewriter church-key biodiesel DIY food truck. Mumblecore wayfarers brooklyn taiyaki, viral pork belly bitters offal hammock. +1 typewriter live-edge sustainable 8-bit. Fashion axe vinyl live-edge edison bulb kitsch heirloom sustainable. Portland taxidermy blue bottle pitchfork yuccie kale chips. Tote bag organic cray tilde, woke gentrify portland pork belly stumptown pour-over. Slow-carb narwhal trust fund, knausgaard chicharrones affogato live-edge mlkshk cold-pressed single-origin coffee vape.
    
    Fanny pack chillwave pok pok poutine glossier waistcoat shoreditch twee paleo ennui. Single-origin coffee unicorn celiac flexitarian blog man braid, keytar kale chips kitsch tacos polaroid lumbersexual. Celiac brooklyn blog yr, beard hella ethical messenger bag shoreditch leggings. Locavore trust fund microdosing, semiotics DIY single-origin coffee mixtape flannel umami coloring book. You probably haven't heard of them poutine photo booth aesthetic master cleanse asymmetrical. Knausgaard migas keffiyeh, mumblecore polaroid chambray kinfolk man braid whatever raclette synth la croix.
    
    Drinking vinegar organic cliche sustainable flexitarian migas aesthetic actually asymmetrical hot chicken locavore mlkshk deep v adaptogen. Gastropub messenger bag cardigan fam, cornhole unicorn affogato helvetica franzen. Man braid 90's air plant lyft kickstarter sartorial. Paleo listicle tousled, cray scenester fixie woke lomo jianbing selvage narwhal.
    
    Retro pinterest venmo cray kitsch snackwave crucifix pitchfork vape vinyl farm-to-table gentrify tumeric master cleanse palo santo. Raclette master cleanse bespoke, snackwave stumptown kogi bitters chartreuse shabby chic DIY. Cold-pressed cloud bread viral, brooklyn biodiesel brunch echo park 3 wolf moon celiac photo booth vice pork belly live-edge intelligentsia polaroid. Roof party flexitarian freegan, asymmetrical deep v mustache adaptogen marfa copper mug meh gastropub tofu pabst live-edge. Listicle hot chicken tattooed williamsburg DIY sartorial master cleanse sustainable hashtag cray. Fanny pack retro hell of 8-bit prism selvage, hexagon godard banh mi austin. Cronut tumeric street art normcore gochujang waistcoat.
    
    Forage schlitz four dollar toast biodiesel lyft air plant, craft beer food truck. Vexillologist dreamcatcher four loko heirloom, hella tote bag taxidermy copper mug ugh trust fund raclette occupy. Dreamcatcher readymade pickled, keytar bitters ethical cloud bread. Trust fund slow-carb umami, pop-up knausgaard irony thundercats quinoa asymmetrical cold-pressed drinking vinegar. Chartreuse adaptogen microdosing authentic lomo single-origin coffee post-ironic.
    
    Readymade 90's jianbing, austin hot chicken fixie yr occupy bitters chartreuse vegan hella try-hard. Meggings direct trade farm-to-table, ugh subway tile iPhone messenger bag 3 wolf moon vegan franzen venmo PBR&B kombucha leggings. Readymade austin pitchfork brooklyn tumeric, flannel literally put a bird on it godard ugh pok pok venmo. Four dollar toast seitan put a bird on it cliche yuccie, adaptogen pinterest ethical schlitz next level leggings distillery. 3 wolf moon tattooed woke swag hella keffiyeh air plant photo booth selfies pabst. Intelligentsia crucifix copper mug single-origin coffee drinking vinegar, la croix ethical waistcoat fam live-edge. Live-edge williamsburg cronut, swag deep v salvia pinterest artisan green juice fashion axe crucifix.
    
    3 wolf moon kitsch crucifix dreamcatcher enamel pin slow-carb woke locavore echo park pug. Fanny pack slow-carb drinking vinegar church-key twee lo-fi skateboard meditation heirloom. Farm-to-table godard stumptown, meh chia tbh retro keffiyeh. Keffiyeh forage taiyaki actually twee tofu fingerstache iPhone adaptogen succulents lyft. Bushwick subway tile shaman twee man bun gastropub austin chia meditation salvia street art yuccie pug. YOLO authentic shoreditch mixtape four dollar toast live-edge paleo. Portland cloud bread actually schlitz irony swag synth, tattooed cray godard hammock.
    
    Whatever synth umami stumptown, XOXO shabby chic glossier squid retro banjo yr tattooed yuccie you probably haven't heard of them. Ethical viral drinking vinegar scenester, schlitz man braid cloud bread pickled brunch. Stumptown photo booth fixie keffiyeh 3 wolf moon biodiesel. Unicorn readymade brunch, paleo helvetica VHS ethical intelligentsia thundercats coloring book you probably haven't heard of them.
    
    Offal lomo microdosing freegan gentrify, affogato cornhole keytar truffaut chambray flexitarian mixtape trust fund. Helvetica live-edge vice scenester, 3 wolf moon flexitarian tote bag pickled taiyaki master cleanse taxidermy cold-pressed vinyl crucifix enamel pin. Organic fam yuccie chicharrones raclette bushwick. 90's selvage dreamcatcher, put a bird on it celiac messenger bag cold-pressed bicycle rights asymmetrical ethical before they sold out prism cray mumblecore. Whatever PBR&B mixtape XOXO locavore enamel pin lomo fanny pack retro kale chips 90's pinterest literally. Freegan cloud bread food truck cronut you probably haven't heard of them tumblr hell of four dollar toast vinyl wayfarers cliche typewriter art party swag.
    
    Kombucha humblebrag pour-over mumblecore you probably haven't heard of them meggings organic mlkshk pitchfork XOXO viral narwhal four dollar toast. Sriracha pickled tumblr tbh. Authentic tacos thundercats af, VHS kombucha sriracha schlitz art party fingerstache flexitarian kinfolk bicycle rights organic. Brunch hella typewriter messenger bag distillery taiyaki unicorn chartreuse affogato literally.
    
    Distillery pinterest bespoke, YOLO microdosing copper mug cronut helvetica blue bottle 3 wolf moon. XOXO wolf synth PBR&B, hot chicken sriracha before they sold out hell of. Tbh listicle marfa put a bird on it waistcoat kombucha try-hard sustainable you probably haven't heard of them forage YOLO bitters. PBR&B kombucha af lyft master cleanse marfa jianbing selfies narwhal pinterest mustache tote bag poutine. Shabby chic venmo single-origin coffee, vaporware la croix chambray gentrify hoodie church-key distillery literally. Artisan XOXO cray, photo booth edison bulb tattooed brooklyn viral knausgaard listicle farm-to-table taiyaki chillwave chia.
    
    Cray yuccie post-ironic typewriter meggings, mlkshk heirloom artisan. Direct trade sartorial PBR&B narwhal snackwave. Drinking vinegar unicorn normcore snackwave bushwick selfies, flexitarian enamel pin prism live-edge hammock activated charcoal pok pok. Food truck church-key jianbing affogato tacos kinfolk disrupt brooklyn messenger bag helvetica iceland gochujang. Cliche mixtape air plant man braid fashion axe coloring book echo park drinking vinegar flexitarian kickstarter bitters sartorial beard stumptown. Squid cred small batch la croix, cray organic copper mug microdosing tattooed flannel tilde. Marfa art party meditation food truck fam PBR&B disrupt health goth venmo crucifix meh gochujang stumptown cronut.
    
    Scenester irony craft beer mumblecore kogi seitan readymade messenger bag selfies trust fund ramps venmo letterpress green juice. Literally blog sartorial XOXO, coloring book gastropub PBR&B shabby chic activated charcoal. Truffaut authentic kogi pork belly. Keffiyeh brooklyn snackwave pickled. Tousled schlitz kombucha, farm-to-table unicorn meggings actually bespoke DIY gochujang.
    
    Celiac unicorn tumeric bespoke tote bag paleo cronut. Single-origin coffee knausgaard health goth, shabby chic mumblecore try-hard art party subway tile neutra. Roof party succulents fixie, pork belly swag stumptown irony whatever cray heirloom. Vinyl sustainable +1 pabst heirloom crucifix, knausgaard PBR&B synth mustache aesthetic brooklyn marfa. Meggings you probably haven't heard of them fashion axe cliche cloud bread yr, narwhal af. Hashtag fashion axe green juice +1 biodiesel brooklyn slow-carb godard vice williamsburg farm-to-table. Vape DIY fixie activated charcoal brunch.
    
    Small batch messenger bag brunch, tumblr selfies hashtag vape salvia selvage raw denim +1. Migas la croix prism shoreditch +1 sartorial. Listicle biodiesel VHS art party pabst, mixtape unicorn seitan cloud bread umami synth activated charcoal PBR&B pug neutra. Drinking vinegar selfies biodiesel, pork belly venmo kinfolk organic fanny pack bitters mlkshk kitsch man bun poutine +1 blue bottle.
    
    Salvia ugh narwhal, keytar 90's cliche air plant. Vice waistcoat unicorn activated charcoal master cleanse, chillwave fanny pack cray franzen pug gastropub. Asymmetrical knausgaard stumptown messenger bag sartorial cred. XOXO pabst pug put a bird on it polaroid skateboard distillery yr man bun PBR&B fanny pack venmo enamel pin snackwave truffaut. Narwhal meditation pug you probably haven't heard of them mlkshk, single-origin coffee vape. Plaid before they sold out etsy schlitz subway tile chicharrones cardigan shaman.
    
    Organic mustache direct trade cray pitchfork. Quinoa edison bulb tofu woke fanny pack, food truck shabby chic subway tile leggings hot chicken meditation. Selvage waistcoat poutine offal. Typewriter cronut kogi hot chicken banh mi small batch, meggings schlitz +1 umami.
    
    Aesthetic forage tote bag kickstarter. Roof party cronut crucifix pork belly keffiyeh. Keffiyeh vexillologist celiac hoodie. Quinoa vice affogato post-ironic freegan vegan art party artisan taiyaki tumblr gentrify direct trade crucifix snackwave.
    
    Poke raclette heirloom trust fund man braid portland health goth. Chillwave VHS jianbing kombucha etsy air plant. Tumeric cronut affogato, helvetica sriracha intelligentsia gluten-free leggings normcore authentic synth shoreditch man bun banh mi godard. Sriracha before they sold out XOXO tote bag, whatever raw denim tousled try-hard forage food truck.
    
    Swag tote bag post-ironic, heirloom hell of lo-fi next level ethical cred occupy butcher skateboard deep v shaman jianbing. Hexagon squid twee photo booth hashtag. Kogi waistcoat schlitz cloud bread pug copper mug fixie hammock mlkshk cardigan marfa deep v. Food truck cornhole banh mi, austin plaid raclette disrupt 8-bit crucifix swag brooklyn helvetica fanny pack. Butcher dreamcatcher banjo irony shoreditch, cloud bread banh mi fingerstache freegan green juice vegan. Readymade live-edge chambray vaporware cloud bread DIY snackwave.
    
    Cardigan af +1, actually pinterest occupy vinyl distillery salvia flannel celiac taiyaki cornhole. Lomo slow-carb ethical subway tile plaid adaptogen. Pop-up fixie put a bird on it biodiesel iPhone cloud bread knausgaard squid. Celiac put a bird on it authentic ennui YOLO hell of squid vaporware. Gastropub edison bulb try-hard, ennui stumptown activated charcoal tacos +1 vinyl 90's kale chips meh. Affogato VHS wayfarers, leggings lo-fi mlkshk bushwick flannel squid asymmetrical wolf art party cloud bread.
    
    Meh semiotics letterpress blog. Ethical helvetica four dollar toast, +1 taiyaki next level af. Venmo pitchfork affogato, gastropub gluten-free ethical truffaut kale chips health goth cloud bread seitan tousled twee chartreuse. Fixie truffaut wayfarers chia tote bag. La croix selvage twee food truck cred helvetica portland copper mug skateboard tbh.
    
    Snackwave tumeric pop-up mustache literally, chartreuse slow-carb leggings. Ethical narwhal mlkshk celiac kickstarter irony health goth franzen swag adaptogen tumeric street art edison bulb. Sartorial tumeric yuccie, pork belly shaman 90's leggings chartreuse bespoke lyft literally dreamcatcher vexillologist artisan. VHS affogato asymmetrical readymade authentic. Mumblecore pok pok leggings chartreuse lo-fi messenger bag, hashtag man braid pug kickstarter copper mug pickled brooklyn chillwave. Adaptogen occupy roof party put a bird on it keffiyeh etsy, 90's DIY umami flannel thundercats blue bottle ramps. Artisan aesthetic blue bottle, ugh dreamcatcher organic pork belly prism hoodie kickstarter live-edge venmo snackwave disrupt.
    
    Street art direct trade tumeric austin poutine everyday carry. Cronut hashtag franzen hell of flexitarian PBR&B. 3 wolf moon YOLO keffiyeh dreamcatcher helvetica chillwave sustainable salvia before they sold out bushwick lomo glossier poke vegan twee. Mixtape unicorn 3 wolf moon, kale chips pour-over fam raw denim adaptogen austin leggings before they sold out copper mug activated charcoal pug fashion axe. Authentic chartreuse vape taiyaki mustache thundercats. Gluten-free franzen fashion axe tilde mumblecore. Bushwick everyday carry small batch affogato hoodie.
    
    Pickled live-edge wolf, glossier brooklyn +1 next level tilde. Godard iPhone tacos glossier pabst. Prism yuccie polaroid iPhone. Bitters brooklyn hexagon kickstarter. Pitchfork coloring book kombucha four loko farm-to-table art party whatever kale chips seitan vexillologist lomo.
    
    Plaid humblebrag flexitarian thundercats, hexagon salvia four dollar toast activated charcoal green juice farm-to-table yuccie pitchfork chicharrones squid. Hexagon bicycle rights offal chicharrones copper mug swag. Hammock intelligentsia pug taiyaki subway tile. Neutra hella artisan kogi lomo, la croix pitchfork skateboard actually.
    
    Art party VHS beard tote bag vape truffaut. Freegan master cleanse beard pitchfork adaptogen, seitan messenger bag coloring book tousled photo booth pinterest hot chicken wolf. Post-ironic copper mug deep v portland kitsch pinterest cred letterpress wayfarers tousled poke cloud bread. Single-origin coffee pok pok thundercats, wayfarers heirloom polaroid echo park craft beer cold-pressed ugh godard sustainable taiyaki. Yuccie normcore microdosing selvage selfies disrupt. Irony freegan vaporware disrupt echo park.
    
    Cornhole vaporware YOLO, snackwave small batch pitchfork gochujang messenger bag chillwave pabst palo santo iPhone. Chambray quinoa banh mi, live-edge twee austin cornhole food truck hot chicken. Photo booth coloring book heirloom craft beer, taiyaki salvia mumblecore. Hoodie coloring book air plant pitchfork readymade affogato fixie post-ironic pork belly wayfarers brooklyn locavore brunch. Gastropub celiac viral chartreuse lo-fi raclette VHS edison bulb polaroid narwhal chicharrones. Church-key lumbersexual shaman, bitters knausgaard normcore trust fund post-ironic tofu pinterest offal yuccie woke gentrify mumblecore. Shoreditch vegan small batch lomo, waistcoat fixie vaporware poke raclette mumblecore art party.
    
    Tacos mumblecore helvetica iPhone squid before they sold out pop-up. Narwhal subway tile taiyaki, pug disrupt austin roof party live-edge sartorial glossier flannel 90's. 8-bit tousled chillwave seitan synth activated charcoal cornhole flexitarian letterpress etsy tacos. Beard celiac yuccie unicorn bespoke hexagon. Scenester actually tumblr vape 3 wolf moon, post-ironic tattooed venmo gentrify. Tumeric banh mi fingerstache, lumbersexual meditation food truck humblebrag semiotics.
    
    Seitan tattooed raclette 8-bit, enamel pin prism narwhal. Marfa four loko kitsch umami 8-bit. Unicorn selvage etsy whatever farm-to-table cornhole blue bottle microdosing hammock street art thundercats tote bag. Flannel banh mi iPhone dreamcatcher. Yuccie truffaut leggings YOLO hoodie godard. DIY godard twee, af activated charcoal ethical brunch. Yuccie kitsch roof party leggings neutra ennui.
    
    Cronut 90's listicle cardigan flannel cornhole hot chicken helvetica, retro fanny pack williamsburg chillwave master cleanse. Gluten-free skateboard schlitz, mumblecore marfa paleo truffaut man braid echo park vice YOLO chartreuse glossier. Bitters authentic godard, keytar locavore beard kickstarter cray taxidermy. Gastropub tumblr poke chartreuse blue bottle godard.
    
    Neutra YOLO enamel pin readymade. Health goth put a bird on it palo santo occupy paleo sriracha butcher. Tofu woke farm-to-table fingerstache butcher art party next level lo-fi XOXO austin hot chicken. Vinyl authentic photo booth narwhal meggings, sartorial kogi fingerstache try-hard pabst yr kitsch beard. Twee next level iPhone migas man braid truffaut venmo beard banjo. Craft beer cornhole neutra bushwick disrupt green juice semiotics gentrify hammock flexitarian you probably haven't heard of them. Live-edge ugh small batch master cleanse, yr truffaut squid thundercats meggings.
    
    YOLO hell of butcher kickstarter, shaman deep v meh pabst. Plaid glossier semiotics fingerstache, hella woke cornhole street art direct trade salvia fixie cronut. Squid typewriter narwhal blog, offal cliche vice organic art party. Ramps kickstarter helvetica hashtag shabby chic mlkshk. Hot chicken pop-up bitters yr XOXO pour-over woke before they sold out squid disrupt austin franzen distillery occupy.
    
    +1 succulents try-hard disrupt ethical taxidermy pop-up truffaut scenester. Cold-pressed fam pour-over hoodie cred brooklyn. Messenger bag cold-pressed kogi taxidermy mixtape. Kogi cloud bread beard messenger bag echo park church-key wayfarers asymmetrical viral tofu. Swag bicycle rights iceland brunch mlkshk, four loko chambray.
    
    Leggings retro PBR&B green juice austin occupy try-hard. VHS lo-fi tbh, gluten-free hashtag shaman fam portland edison bulb shabby chic echo park. Microdosing yuccie distillery tilde deep v hexagon squid offal shaman cray echo park trust fund. Portland brooklyn VHS copper mug enamel pin try-hard jean shorts intelligentsia yr microdosing narwhal four dollar toast wayfarers cronut salvia. Biodiesel wayfarers cardigan tattooed brunch typewriter. Direct trade +1 tattooed seitan, chambray next level single-origin coffee cardigan.
    
    Trust fund chambray kitsch organic ramps selfies, jean shorts master cleanse adaptogen chia neutra. Raw denim chia synth raclette shaman 3 wolf moon. Whatever woke organic farm-to-table, succulents small batch tbh narwhal chicharrones. Whatever street art yuccie copper mug. Scenester godard freegan banh mi forage, biodiesel marfa irony. Literally twee copper mug cold-pressed freegan everyday carry, cloud bread fixie sriracha XOXO. Cloud bread literally mumblecore +1 vice.
    
    Offal everyday carry tacos +1 hell of readymade cred deep v selfies. Four dollar toast chartreuse brooklyn etsy lyft. Keytar mixtape banh mi, affogato brooklyn organic gentrify franzen meh fixie. Ennui everyday carry mustache chartreuse schlitz. Aesthetic XOXO hoodie, banh mi ramps cliche bushwick austin organic paleo kale chips activated charcoal salvia kinfolk schlitz. Twee meggings brooklyn chambray.
    
    Trust fund bicycle rights palo santo, 3 wolf moon blue bottle literally glossier vaporware. Aesthetic echo park whatever pabst. Tbh everyday carry artisan, schlitz shabby chic food truck vexillologist selfies synth mixtape. Sartorial biodiesel occupy, messenger bag activated charcoal offal subway tile. Gentrify af snackwave banjo single-origin coffee austin sriracha. Butcher vaporware put a bird on it vegan banh mi. Stumptown 3 wolf moon shabby chic, pitchfork austin single-origin coffee helvetica.
    
    Photo booth selfies occupy green juice slow-carb readymade kickstarter activated charcoal. Pok pok bushwick blog iPhone. Helvetica taiyaki master cleanse banh mi af chia gochujang lo-fi actually vinyl scenester leggings gentrify health goth. Typewriter locavore cardigan selfies kale chips lomo pour-over hot chicken YOLO. 90's iceland cred typewriter wolf tacos.
    
    Plaid dreamcatcher adaptogen disrupt gluten-free subway tile wolf neutra. Enamel pin echo park slow-carb gochujang portland. Hell of vegan dreamcatcher keytar franzen sriracha enamel pin vape green juice ethical skateboard twee kale chips four loko. Pitchfork drinking vinegar shabby chic, edison bulb etsy street art four loko 3 wolf moon selfies. Pickled enamel pin offal whatever poutine, schlitz deep v shaman listicle brunch selvage franzen ramps.`;

const wordsArr = paragraphs.trim().replace(/[.,]/g, '').split(/\s+/);
const dedupedSet = new Set(wordsArr);
const dedupedWords = [...dedupedSet].filter(word => word !== null)

const seed = () => {
  return Promise.all(dedupedWords.map(word => Word.create({word}))
  )
}
const main = () => {
  console.log('syncing db');
  db.sync({force: true})
  .then(() => {
    console.log('seeding')
    return seed()
  })
  .catch(err => {
    console.log('Error while seeding')
    console.log(err.stack)
  })
  .then(()=> {
    db.close();
    return null;
  })
}

main();
