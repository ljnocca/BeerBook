import React from 'react'
import Banner from './components/banner.js'

const BeerFacts = React.createClass({
	render: function() {

	 	return (
	 		<div className='beer-facts'>
	 			<Banner />

	 			<div className="fact-div beerInfo">
		 			<img src="../../images/beerGlassTypes.jpg" />
				</div>

				<div className="fact-div beerInfo">
		 			<img src="../../images/beerInfo.png" />
				</div>

	 			<div className="fact-div">
		 			<h1><u>Intro</u></h1>
					<p>The sheer number of beer styles and the range of flavors they represent is huge. And there are always new ones being developed and existing ones being mashed together (pun intended) by innovative brewers. So there really is no such thing as a “complete” or “definitive” list of all the different beers out there. It’s always getting longer. But there is still a lot of rock-solid ground for you to stand on as you get more beer-savvy.</p>
					<p>There are two broad categories of beer that include almost every brew you’re likely to encounter:</p>
				</div>

				<div className="fact-div">
					<h1><u>Lagers</u></h1>
					<p>Budweiser, Coors, Miller, Corona, and most mass-produced beers are lagers. So are some delicious craft beers like Samuel Adams Boston Lager and Brooklyn Lager. So are a lot of the famous German beers like Pilsner. And so are headache-inducing malt liquors like St. Ides and Colt 45.</p>
					<p>What do these all have in common? It’s got nothing to do with color, flavor or alcohol content—although you can broadly generalize that most lagers tend to be on the “lighter” side of both. The best answer to what makes a lager a lager is the type of yeast that is used to ferment it. It’s similar, but not the same as the type of yeast used to ferment ales (the other broad category we’ll look at in a second). Lager yeasts tend to bring out crisp, clean, “cereal-like” flavors in beer. Most lagers are on the low-alcohol side. Part of the reason for this is that lager yeasts (which, remember, are living creatures) start to shut down and die off when the alcohol level of the liquid they live in gets too high. (You know how the doctor rubs your arm with alcohol before giving you a shot to kill any bacteria? Same idea.) One more important thing to know about them is that they are happiest in cold fermenting conditions, usually around 50°F. So in a brewery, the tanks that hold fermenting lagers are always kept refrigerated.</p>
				</div>	

				<div className="fact-div">
					<h1><u>Ales</u></h1>
					<p>Most big, heavy, bold beers are ales: Guinness Stout, Bass Ale, the intense India Pale Ales you might enjoy, etc. Ale is fermented with a type of yeast that works well at higher temperatures, usually around 70°F, give or take a few degrees. Ale yeast brings out a range of fruity, spicy, complex flavors. And unlike many lager yeasts, it can produce a high-alcohol brew. Since brewing ales doesn’t require any refrigeration, they are popular among homebrewers.</p>
				</div>	







				<div className="fact-div">
					<h2>American Light Lager</h2>
					<p>The classic “cold one”, American light lager is the flagship style of most of the world’s biggest brewers. (Ironically, most of them are now owned by foreign companies). It’s not the most complex in flavor, but no one would deny it’s a refreshing thirst-quencher on a hot day. Usually this style is brewed with another grain (often rice) in addition to barley. The rice is not only cost-effective for the brewery, it ensures the beer has a light, refreshing texture.</p>
				</div>	

				<div className="fact-div">
					<h2>Czech-Style Pilsner</h2>
					<p>In Europe they make pale yellow lagers too, but they are 100% barley and tend to be deeper in hop and malt character than American Light Lagers. The most famous style is Pilsner, named after the Czechoslovokian town of Pilsen. Pilsner Urquell is the world standard for this style, and is easy to find in the USA.</p>
				</div>	

				<div className="fact-div">
					<h2>German Beers</h2>
					<p>Germany has one of the world’s best beer cultures, and its brewing traditions go back over a thousand years. All the information on different German beers could fill a book, but for now we’ll just say that you don’t want to miss trying beers like Bock, Munich Helles, Altbier, Oktoberfest, Kolsch, and others. Visit a good German “beer garden” and you can probably try them all in one (long) night.</p>
				</div>	

				<div className="fact-div">
					<h2>Wheat beer/Hefeweizen</h2>
					<p>This style has become extremely popular in America since the introduction of Blue Moon by MillerCoors, though the Germans were enjoying it with their wurst (sausages) long before. Cloudy, cold, and often served with a slice of orange or lemon, wheat beers are a refreshing change of pace.</p>
				</div>	

				<div className="fact-div">
					<h2>Pale ale</h2>
					<p>Pale Ale is a wide category, and it dates back over a century when English brewers were looking for a name for beers that were too light to be Porters, Stouts, or Brown Ales. Bass Ale is an “old school” classic, while Sierra Nevada Pale Ale might be the flagship modern example. Pale ales of this sort are usually deep orange in color and have a good kick of hop aroma, though not as intensely as their cousin, India Pale Ales.</p>
				</div>	

				<div className="fact-div">
					<h2>India Pale Ale</h2>
					<p>To quote Will Ferrell in Zoolander, India Pale Ale (or IPA) is “so hot right now” in the craft beer world. Craft IPAs are all about hops, hops and more hops. More often than not they have a full body and high alcohol content—upwards of 7%–which helps to balance out the intense piney, herbal, fruity characteristics of the hop mega-load.</p>
					<p>The style began in 19th-Century England, where a lot of English-brewed beer was shipped to the British living in India. Hops are a natural preservative, so (according to legend) some brewers realized that adding a lot of hops would help the beer survive the long journey by ship. But modern American craft brewers have taken it to a whole new level of richness and deliciousness. Some classics to try are Dogfish Head 60-minute IPA, Sierra Nevada Torpedo, and Stone IPA.</p>
				</div>	

				<div className="fact-div">
					<h2>Brown ale</h2>
					<p>Brown ale is mellow, malty, and usually not as hoppy as an IPA. Made with a portion of deeply toasted malt that imparts a rich chocolate color, brown ales have delicious malty flavors and pair perfectly with a lot of different foods.</p>
				</div>	

				<div className="fact-div">
					<h2>Belgian Ale</h2>
					<p>This is another category that includes a large number of styles. But it deserves an overview here because most serious beer lovers agree that Belgian beer is the best in the world. Specifically, Belgian Trappist Ales, brewed by monks. These are not cheap and some of them are very hard to find, but they deliver a drinking experience like no other—it’s almost impossible to put into words, but it’s on the level of drinking a fine wine. Belgian Trappist beers that are widely distributed include Chimay, Rochefort, and Westmalle.</p>
				</div>	

				<div className="fact-div">
					<h2>Porter</h2>
					<p>Porter is a dark ale—darker than brown—that was the classic English pub drink for many years. It’s still popular as a craft beer today, though less common than stout—which began as a type of porter. Top craft breweries like Sierra Nevada and Anchor produce delicious porters, and some other innovative breweries make a smoky-tasting “smoked porter”. Bring a six-pack of smoked porter to your next barbecue, it’s a guaranteed hit.</p>
				</div>	

				<div className="fact-div">
					<h2>Stout</h2>
					<p>Stout is a close relative of Porter, but it tends to be a little darker and “roastier” tasting. One reason for this is that stout always has a portion of un-malted, deeply roasted barley in the mash. Of course, Guinness is the world-renowned classic. But many craft brewers also riff on stout, combining it with a wide range of interesting and delicious additions like espresso, chocolate and oatmeal. You might be surprised to learn that despite the color and thick foam, Guinness Stout is actually very light in alcohol (and in calories). The same can’t be said for “Imperial Stout” styles like Old Rasputin.</p>
				</div>	

				<div className="fact-div">
					<h2>Barley Wine</h2>
					<p>This ultra-strong ale is named because it typically has an alcohol level in the 10%-13% range, where you’d expect to find wine, not beer. They are a little sweet, not very fizzy, and best sipped at room temperature out of a glass like a brandy snifter. A great after-dinner drink paired with an assortment of fine cheeses.</p>
				</div>	

				<div className="fact-div">
					<h2>Sour beer</h2>
					<p>Ready for a walk on the wild side? Many people hate sour beer the first time they taste it, but like a lot of great things it takes a few tries to really “get what it’s all about”. And it seems to be catching on. A lot of sour beer styles began in Belgium, such as Lambic. Top American craft breweries like Russian River Brewing in California are getting in on the action though, making complex, refreshing sour brews that electrify the palate and stimulate the appetite.</p>
					<p>What makes a sour beer sour? Well, without getting too technical, it’s usually an organism other than yeast that is added to the beer (or allowed to naturally enter from the air). One common one is lactobacillus, which is also used to make yogurt.</p>
				</div>	


				 			
	 		</div>
	 	)
 	}
})
export default BeerFacts