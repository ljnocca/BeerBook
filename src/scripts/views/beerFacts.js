import React from 'react'
import Banner from './components/banner.js'

const BeerFacts = React.createClass({
	render: function() {

	 	return (
	 		<div className='beer-facts'>
	 			<Banner />
	 			<div className="fact-div">
		 			<h2>Varieties</h2>
					<p>While there are many types of beer brewed, the basics of brewing beer are shared across national and cultural boundaries. The traditional European brewing regions—Germany, Belgium, England and the Czech Republic—have local varieties of beer. </p>
					<p>Top-fermented beers are most commonly produced with Saccharomyces cerevisiae, a top-fermenting yeast which clumps and rises to the surface, typically between 15 and 24 °C (60 and 75 °F). At these temperatures, yeast produces significant amounts of esters and other secondary flavour and aroma products, and the result is often a beer with slightly "fruity" compounds resembling apple, pear, pineapple, banana, plum, or prune, among others. </p>
					<p>After the introduction of hops into England from Flanders in the 15th century, "ale" referred to an unhopped fermented beverage, "beer" being used to describe a brew with an infusion of hops. </p>
				</div>

				<div className="fact-div">
					<h2>Pale ale</h2>
					<p>Pale ale is a beer which uses a top-fermenting yeast and predominantly pale malt. It is one of the world's major beer styles.</p>
				</div>	

				<div className="fact-div">
					<h2>Stout</h2>
					<p>Stout and porter are dark beers made using roasted malts or roast barley, and typically brewed with slow fermenting yeast. There are a number of variations including Baltic porter, dry stout, and Imperial stout. The name "porter" was first used in 1721 to describe a dark brown beer popular with the street and river porters of London. This same beer later also became known as stout, though the word stout had been used as early as 1677. The history and development of stout and porter are intertwined. </p>
				</div>		

				<div className="fact-div">
					<h2>Mild</h2>
					<p>Mild ale has a predominantly malty palate. It is usually dark coloured with an abv of 3% to 3.6%, although there are lighter hued milds as well as stronger examples reaching 6% abv and higher.</p>
				</div>	

				<div className="fact-div">
					<h2>Wheat</h2>
					<p>Wheat beer is brewed with a large proportion of wheat although it often also contains a significant proportion of malted barley. Wheat beers are usually top-fermented (in Germany they have to be by law). The flavour of wheat beers varies considerably, depending upon the specific style.</p>
				</div>

				<div className="fact-div">
					<h2>Lambic</h2>
					<p>Lambic, a beer of Belgium, is naturally fermented using wild yeasts, rather than cultivated. Many of these are not strains of brewer's yeast (Saccharomyces cerevisiae) and may have significant differences in aroma and sourness. Yeast varieties such as Brettanomyces bruxellensis and Brettanomyces lambicus are common in lambics. In addition, other organisms such as Lactobacillus bacteria produce acids which contribute to the sourness. </p>
				</div>	

				<div className="fact-div">
					<h2>Lager</h2>
					<p>Lager is cool fermented beer. Pale lagers are the most commonly consumed beers in the world. The name "lager" comes from the German "lagern" for "to store", as brewers around Bavaria stored beer in cool cellars and caves during the warm summer months. These brewers noticed that the beers continued to ferment, and to also clear of sediment, when stored in cool conditions. </p>
					<p>Lager yeast is a cool bottom-fermenting yeast (Saccharomyces pastorianus) and typically undergoes primary fermentation at 7–12 °C (45–54 °F) (the fermentation phase), and then is given a long secondary fermentation at 0–4 °C (32–39 °F) (the lagering phase). During the secondary stage, the lager clears and mellows. The cooler conditions also inhibit the natural production of esters and other byproducts, resulting in a "cleaner"-tasting beer. </p>
					<p>Modern methods of producing lager were pioneered by Gabriel Sedlmayr the Younger, who perfected dark brown lagers at the Spaten Brewery in Bavaria, and Anton Dreher, who began brewing a lager (now known as Vienna lager), probably of amber-red colour, in Vienna in 1840–1841. With improved modern yeast strains, most lager breweries use only short periods of cold storage, typically 1–3 weeks.</p>	
				</div>	
				 			
	 		</div>
	 	)
 	}
})
export default BeerFacts