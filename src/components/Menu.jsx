import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const menuData = {
  Breakfast: {
    disclaimer: '(GF) Gluten-Friendly · (V) Vegan · (VG) Vegetarian',
    sections: [
      {
        title: 'Local Favorites',
        items: [
          { name: 'Huevos Rancheros', desc: 'Two cage-free eggs, crispy tostadas, chorizo, black beans, pico de gallo, avocado salsa', tags: ['GF'] },
          { name: 'Smashed Avocado Toast', desc: 'Rosemary & sea salt sourdough, crushed avocado, tangerine olive relish, ruby radish', tags: ['VG'], addons: ['+ cage-free egg'] },
          { name: "I'm Your Huckleberry", desc: 'House-made GF huckleberry french toast, orange pistachio butter, maple berry syrup', tags: ['VG', 'GF'] },
        ],
      },
      {
        title: 'Fresh Start',
        items: [
          { name: 'Seasonal Berry Parfait', desc: 'Local honey-yogurt & house-made granola', tags: ['VG'] },
          { name: 'Açaí Awaken Bowl', desc: 'Acai greek yogurt, fresh berries, pineapple, chia seeds, mandarin oranges, house-made granola, mesquite honey drizzle', tags: ['VG'] },
          { name: 'Melon & Berries', desc: 'Seasonal melon, berries', tags: ['V', 'GF'] },
          { name: 'Steel-Cut Oatmeal', desc: 'Fresh berries, toasted pecans', tags: ['VG', 'GF'] },
        ],
      },
      {
        title: 'Classics',
        items: [
          { name: 'Carcara Morning Breakfast', desc: 'Two cage-free eggs any style, carcara morning potatoes. Choice of protein: bacon, sausage, or ham. Choice of toast: white, 9-grain, or sourdough', tags: [] },
          { name: 'Carcara Breakfast Bowl', desc: 'Scrambled cage-free eggs, quinoa, spinach, root vegetables, bell pepper', tags: ['VG', 'GF'] },
          { name: 'Rosemary Ham & Cheddar Omelet', desc: 'Three cage-free egg omelet, grilled rosemary ham, carcara morning potatoes. Choice of toast', tags: [] },
          { name: 'Carcara Double Stack', desc: 'Two buttermilk pancakes, whipped sweet cream butter, maple syrup, candied citrus', tags: ['VG'] },
          { name: 'Smoked Salmon Bagel', desc: 'Dill, scallion & citrus cream cheese, capers, marinated tomato, pickled red onion, cucumber, toasted bagel', tags: [] },
          { name: 'Cereal Bowl', desc: 'Choice of cereal: cheerios, raisin bran, special k, fruit loops. Choice of milk: whole, 2%, skim, almond, soy', tags: [], addons: ['+ fresh berries or bananas'] },
        ],
      },
      {
        title: 'Specialties',
        items: [
          { name: 'Carcara Breakfast Sandwich', desc: 'Brioche bun, extra applewood smoked bacon, marinated tomatoes, aged cheddar, calabrian chili aioli, rocket arugula, side of carcara morning potatoes', tags: [] },
          { name: 'Madame Carcara', desc: "Griddled focaccia, fra'mani ham, chili and chive spiked mornay, cage-free easy egg, az citrus", tags: [] },
        ],
      },
      {
        title: 'Sides',
        items: [
          { name: 'Applewood Smoked Bacon', desc: '', tags: [] },
          { name: "Schreiner's Sausage", desc: '', tags: [] },
          { name: 'Impossible Breakfast Sausage', desc: '', tags: [] },
          { name: "Fra'mani Ham Steak", desc: '', tags: [] },
          { name: 'Two Cage Free Eggs Your Way', desc: '', tags: [] },
          { name: 'Carcara Morning Potatoes', desc: '', tags: [] },
          { name: 'Yogurt', desc: 'Non-fat greek or strawberry', tags: [] },
          { name: 'Butter Croissant', desc: '', tags: [] },
          { name: 'Blueberry Muffin', desc: '', tags: ['GF'] },
          { name: 'Seasonal Danish', desc: '', tags: [] },
          { name: 'Wildflower Bread Co. Toast', desc: 'White, 9-grain, sourdough, or gluten free', tags: [] },
        ],
      },
    ],
  },
  Brunch: {
    disclaimer: 'Add a Carosa to any entrée or board +$3 · Available à la carte $8',
    sections: [
      {
        title: 'Mains',
        items: [
          { name: 'Seasonal Parfait', desc: 'Local honey yogurt & house made granola', tags: ['VG'] },
          { name: 'Smashed Avocado Toast', desc: 'Rosemary and sea salt sourdough, crushed avocado, tangerine olive relish, ruby radish', tags: ['V'], addons: ['+ cage-free egg'] },
          { name: 'Jalapeño Cheddar Biscuit', desc: 'Sausage & herb gravy', tags: [] },
          { name: 'Pop Tart', desc: 'Applewood smoked bacon, scrambled cage-free eggs, cheddar cheese, pepper jelly', tags: [] },
          { name: 'Sonoran Tacos', desc: "Schreiner's chorizo, scrambled cage-free eggs, queso fresco, pico de gallo, avocado", tags: [] },
          { name: 'Chicken Pastor Sandwich', desc: 'Roasted poblano aioli, applewood smoked bacon, pineapple slaw, gouda cheese, house fries', tags: [] },
          { name: 'Madame Carcara', desc: "Griddled focaccia, fra'mani ham, chili and chive spiked mornay, cage-free easy egg, az citrus", tags: [] },
          { name: 'Harvest Frittata', desc: 'Cage-free eggs, queso oaxaca, sweet potato, roasted pepper, baby greens', tags: ['VG', 'GF'] },
          { name: 'Sonoran Caesar', desc: 'Romaine leaves, queso fresco, mole croutons, cured tomatoes, roman caesar dressing', tags: [], addons: ['+ shrimp', '+ herb grilled chicken'] },
          { name: 'Buddha Bowl', desc: 'Cilantro rice, brussels sprouts, sweet potato, cauliflower, baby kale, chipotle vinaigrette', tags: ['VG', 'GF'], addons: ['+ shrimp', '+ herb grilled chicken'] },
          { name: 'Baby Kale Salad', desc: 'Baby kale, roasted beets, candied pecans, cipollini onions, goat cheese croquette, maple lime balsamic', tags: ['VG', 'GF'], addons: ['+ herb grilled chicken', '+ salmon'] },
          { name: 'Carcara Angus Burger', desc: 'Brioche, pepper jack cheese, tomato, pickled red onion, arugula, paprika aioli, house fries', tags: [], addons: ['+ cage-free egg', '+ bacon', '+ avocado'] },
          { name: 'Chile Verde Skillet', desc: 'Pork chile verde, over easy cage-free eggs, carcara morning potatoes, oaxaca cheese, tortillas', tags: [] },
          { name: 'Chilaquiles de Pollo', desc: 'Chicken mole, queso fresco, over easy cage-free egg, pico de gallo, avocado, pickled onions', tags: ['GF'] },
        ],
      },
      {
        title: 'Boards',
        items: [
          { name: 'Batter Up', desc: "Schreiner's pork sausage, buttermilk pancakes, blood orange syrup, poppy seed-citrus marmalade, whipped butter, caramelized bananas & pecans, berries, whipped cream", tags: [] },
          { name: '3 Amigos', desc: "Schreiner's chorizo, cage-free egg & oaxaca chimichanga, chicken machaca & roasted veggie chimichanga, pico de gallo, jicama slaw, jalapeño cream cheese, guacamole, chocolate churro, burnt orange caramel", tags: [] },
        ],
      },
      {
        title: 'Sweets',
        items: [
          { name: 'Gluten Free Cherry Muffin', desc: 'Luxardo cherry compote, citrus ricotta, bourbon glaze', tags: ['VG', 'GF'] },
          { name: 'Pistachio Pinwheels', desc: 'Flakey puff pastry, pistachio creme, mesquite honey lemon ricotta', tags: ['VG'] },
          { name: 'Desert Pumpkin Capirotada', desc: 'AZ dates, citrus brown butter pecans, spiced kahlua anglaise', tags: ['VG'] },
        ],
      },
      {
        title: 'Sides',
        items: [
          { name: 'Two Cage-Free Eggs Your Way', desc: '', tags: [] },
          { name: 'Applewood Smoked Bacon', desc: '', tags: [] },
          { name: 'Impossible Breakfast Sausage', desc: '', tags: [] },
          { name: "Schreiner's Sausage", desc: '', tags: [] },
        ],
      },
    ],
  },
  Lunch: {
    disclaimer: '(GF) Gluten-Friendly · (V) Vegan · (VG) Vegetarian',
    sections: [
      {
        title: 'Beginnings',
        items: [
          { name: 'Red Pepper & Lime Hummus', desc: 'Cucumbers, heirloom carrots, radish, crispy lavash, sunflower seeds', tags: ['V'] },
          { name: 'Buffalo Cauliflower', desc: 'Rogue blue cheese crema, scallions', tags: ['VG'] },
          { name: 'Loaded Guacamole & Charred Tomato Salsa', desc: 'Cotija cheese, roasted pepitas, pickled onions, jicama, radish, tortilla chips', tags: ['VG', 'GF'] },
          { name: 'Sonoran Caesar', desc: 'Romaine leaves, queso fresco, mole croutons, cured tomatoes, roman caesar dressing', tags: [], addons: ['+ salmon', '+ herb grilled chicken', '+ shrimp'] },
          { name: 'Arugula Salad', desc: 'Wild rocket arugula, quinoa, cranberries, dried corn, glazed pistachios, pink lady apple, prickly pear vinaigrette', tags: ['V', 'GF'], addons: ['+ salmon', '+ herb grilled chicken', '+ shrimp'] },
          { name: 'Baby Kale Salad', desc: 'Baby kale, roasted beets, candied pecans, cipollini onions, goat cheese croquette, maple lime vinaigrette', tags: ['VG', 'GF'], addons: ['+ herb grilled chicken', '+ shrimp', '+ salmon'] },
          { name: 'Green Chile Corn Chowder', desc: 'Poblano cashew cream, smoked paprika, micro cilantro', tags: ['V', 'GF'] },
        ],
      },
      {
        title: 'Features',
        items: [
          { name: 'Orange & Chile Shrimp Tacos', desc: 'Citrus slaw, micro cilantro, lime crema, pickled onion', tags: [] },
          { name: 'Smoked Beef Tacos', desc: 'Citrus slaw, micro cilantro, lime crema, pickled onion', tags: [] },
          { name: 'Turkey Wrap', desc: 'Sun dried tomato tortilla, bacon, arugula, pickled tomatoes, provolone cheese, calabrian chili aioli, fries', tags: [] },
          { name: 'Smoke Show Wings', desc: 'Adobo & orange marinated wings, chipotle blue cheese dip, fries', tags: ['GF'] },
          { name: 'Carcara Angus Burger', desc: 'Brioche, pepper jack cheese, tomato, pickled red onions, arugula, paprika aioli, house fries', tags: [], addons: ['+ cage-free egg', '+ bacon', '+ avocado'] },
          { name: 'Chicken Pastor Sandwich', desc: 'Roasted poblano aioli, applewood smoked bacon, pineapple slaw, gouda cheese, house fries', tags: [] },
          { name: 'Chipotle Black Bean Burger', desc: 'Baby greens, marinated tomatoes, chipotle aioli, brioche bun, fries', tags: ['VG'] },
          { name: 'Buddha Bowl', desc: 'Cilantro rice, brussels sprouts, sweet potato, cauliflower, baby kale, chipotle vinaigrette', tags: ['V', 'GF'], addons: ['+ salmon', '+ herb grilled chicken', '+ shrimp'] },
        ],
      },
    ],
  },
  Dinner: {
    disclaimer: '',
    sections: [
      {
        title: 'Beginnings',
        items: [
          { name: 'Baby Kale Salad', desc: 'Baby kale, roasted beets, candied pecans, cipollini onion, goat cheese croquette, maple lime vinaigrette', tags: ['VG', 'GF'] },
          { name: 'Sonoran Caesar', desc: 'Romaine leaves, queso fresco, mole croutons, cured tomatoes, roman caesar dressing', tags: [], addons: ['+ chicken', '+ shrimp'] },
          { name: 'Arugula Salad', desc: 'Wild rocket arugula, quinoa, cranberries, dried corn, glazed pistachio, pink lady apple, prickly pear vinaigrette', tags: ['V', 'GF'], addons: ['+ adobo shrimp', '+ chicken', '+ salmon'] },
          { name: 'Prosciutto Wrapped Peppadew', desc: 'AZ date and citrus goat cheese, blackberries, balsamic glaze, baby greens', tags: ['GF'] },
          { name: 'Green Chili Corn Chowder', desc: 'Poblano cashew cream, smoked paprika, micro cilantro', tags: ['V', 'GF'] },
          { name: 'Cured Salmon Crostini', desc: 'Toasted rosemary sourdough, blood orange whipped queso fresco, radish, pine nuts, petite sea grass, hot honey', tags: [] },
          { name: 'Red Pepper & Lime Hummus', desc: 'Cucumbers, heirloom carrots, radish, crisp lavash, sunflower seeds', tags: ['V'] },
          { name: 'Buffalo Cauliflower', desc: 'Rogue blue cheese crema, scallions', tags: ['VG'] },
          { name: 'Bread and Butter Board', desc: 'Warm focaccia, carcara hot honey butter, spiced fig jam', tags: ['VG'] },
          { name: 'Loaded Guacamole & Charred Tomato Salsa', desc: 'Cotija cheese, roasted pepitas, pickled onions, jicama, radish', tags: ['VG', 'GF'] },
        ],
      },
      {
        title: 'Features',
        items: [
          { name: 'Fork Tender Short Rib', desc: 'Citrus & smoke carrot puree, brussels sprouts, oyster mushrooms, pomegranate glaze', tags: ['GF'] },
          { name: 'Big Sky Ribeye', desc: 'Heirloom cauliflower, fig demi-glace, blue zone sweet potato, hot pepper & lime butter', tags: ['GF'] },
          { name: 'Northwoods Elk Loin', desc: 'Grilled elk loin, parsnip puree, citrus roasted asparagus, huckleberry demi-glace, pine nut gremolata', tags: ['GF'] },
          { name: 'Alaskan Black Cod', desc: 'Rainbow chard, pumpkin arancini, citrus & poppy seed, beurre blanc, blood orange & fennel salad', tags: ['GF'] },
          { name: 'Carcara Angus Burger', desc: 'Brioche, pepper jack cheese, tomato, pickled red onions, arugula, paprika aioli, fries', tags: [], addons: ['+ bacon'] },
          { name: 'Shrimp & Grits', desc: 'Ramona farms pima grits, mole glazed shrimp, butternut squash, kumquat beet chutney, autumn spiced pecans', tags: ['GF'] },
          { name: 'Poblano Risotto', desc: 'Orange blossom honey glazed carrots, asparagus, baby kale, crispy fresno & shallot', tags: ['V', 'GF'], addons: ['+ shrimp', '+ herb grilled chicken'] },
          { name: 'Chicken & Three Sisters Succotash', desc: 'Jalapeño & herb marinated chicken breast, mt. hope red rice, tepary bean, corn & squash succotash, cotija crisp, chipotle crema, cara cara orange', tags: ['GF'] },
          { name: 'Old Fashion Pork Chop', desc: 'Berkshire chop, pancetta creamed corn bread pudding, delicata squash, smoked apple old fashioned sauce', tags: [] },
        ],
      },
      {
        title: 'Sides',
        items: [
          { name: 'Rosemary & Garlic Mashed Potatoes', desc: '', tags: [] },
          { name: 'Blue Zone Sweet Potato, Hot Pepper & Lime Butter', desc: '', tags: ['VG', 'GF'] },
          { name: 'Citrus Roasted Asparagus', desc: '', tags: ['V', 'GF'] },
          { name: 'Poblano Risotto', desc: '', tags: ['V', 'GF'] },
        ],
      },
    ],
  },
  'Happy Hour': {
    disclaimer: 'Daily 4pm – 6pm · Lounge & bar only',
    sections: [
      {
        title: 'Bar Snacks',
        items: [
          { name: 'Buffalo Cauliflower', desc: 'Rogue blue cheese crema, scallions', tags: ['VG'] },
          { name: 'Red Pepper & Lime Hummus', desc: 'Cucumbers, heirloom carrots, crispy lavash, sunflower seeds', tags: ['V'] },
          { name: 'Loaded Guacamole & Charred Tomato Salsa', desc: 'Cotija cheese, roasted pepitas, pickled onion, jicama, radish, tortilla chips', tags: ['VG', 'GF'] },
          { name: 'Ancho Chili Braised Beef Taco', desc: 'Smoked beef short rib, orange pico de gallo, micro cilantro, lime crème', tags: [] },
          { name: 'Smoke Show Wings', desc: 'Adobo & orange marinated wings, chipotle blue cheese dip', tags: ['GF'] },
          { name: 'Prosciutto Wrapped Peppadew', desc: 'AZ date and citrus goat cheese, blackberries, balsamic glaze', tags: ['GF'] },
          { name: 'Cured Salmon Crostini', desc: 'Blood orange whipped queso fresco, radish, toasted pine nuts, petite sea grass, hot honey', tags: [] },
        ],
      },
      {
        title: 'Beverages',
        items: [
          { name: '$8 Draft Beer', desc: 'Urban Sunset (Mexican Lager) · Spellbinder (Hazy IPA) · Michelob Ultra (American Lager)', tags: [] },
          { name: '$10 Wine', desc: 'Silvergate Sparkling · Unknown Author Chardonnay · Justin Sauvignon Blanc · Fluers de Prairie Rosé · Unknown Author Cabernet · Archetype Pinot Noir', tags: [] },
          { name: '$10 Cocktails', desc: "Bridge & Tunnel · Painted Desert · The Phoenix · Today's Crafted Cocktail", tags: [] },
        ],
      },
    ],
  },
  Dessert: {
    disclaimer: '',
    sections: [
      {
        title: 'Desserts',
        items: [
          { name: 'Sorbet Trio', desc: 'Cranberry, blackberry cabernet, lemon', tags: ['V', 'GF'] },
          { name: 'Autumn Date Cake', desc: 'Spiced date cake, pistachio sour cream gelato, honeycomb, az citrus', tags: [] },
          { name: "Gooey S'mores Brownie Skillet", desc: 'Warm fudge brownie, toasted marshmallow, house-made golden graham gelato', tags: [] },
          { name: 'Apple Ginger Brûlée & Sorbet', desc: 'Apple ginger compote, vanilla brûlée, oatmeal cranberry cookie, cranberry sorbet', tags: ['GF'] },
          { name: 'Dessert Tortoise Cheesecake', desc: 'Chocolate pecan cookie crust, caramel chocolate cheesecake, candied pecans, citrus salted caramel drizzle, cherry port reduction', tags: [] },
        ],
      },
      {
        title: 'Dessert Cocktails',
        items: [
          { name: 'Espresso Martini', desc: 'Vodka, kahlua, espresso', tags: [] },
          { name: 'Dust Devil', desc: 'Stoli Vanilla, chai, cream', tags: [] },
          { name: 'Fonseca Tawny 10yr Porto', desc: 'Portugal', tags: [] },
        ],
      },
    ],
  },
  'Kids Menu': {
    disclaimer: '',
    sections: [
      {
        title: 'Breakfast',
        items: [
          { name: 'Pancakes', desc: 'Chocolate chips, blueberries, or bananas', tags: [] },
          { name: 'Breakfast Plate', desc: 'Bacon or sausage, scrambled eggs & fresh fruit', tags: [] },
          { name: 'French Toast', desc: 'Powdered sugar, berries', tags: [] },
          { name: 'Cereal Bowl', desc: 'Cheerios, raisin bran, special K, fruit loops. Add fresh berries or banana', tags: [] },
        ],
      },
      {
        title: 'Dinner',
        items: [
          { name: 'Chicken Tenders & Fries', desc: 'Three tender juicy chicken strips, fries', tags: [] },
          { name: 'Grilled Cheese & Fruit', desc: 'Artisan white bread, cheddar cheese, seasonal melons', tags: [] },
          { name: 'Little Chicken Dinner', desc: 'Grilled chicken breast, corn', tags: [] },
          { name: 'Mac & Cheese', desc: 'Cavatappi, cheddar cheese sauce', tags: [] },
          { name: 'Kid Caesar Salad', desc: 'Romaine leaves, queso fresco, mole croutons, cured tomatoes, roman caesar dressing', tags: [] },
          { name: 'Flatbreads', desc: 'Pepperoni or Cheese', tags: [] },
          { name: 'Häagen-Dazs Raspberry Sorbet', desc: '', tags: ['GF'] },
          { name: 'Hot Fudge Sundae', desc: 'Vanilla ice cream, whipped cream', tags: [] },
        ],
      },
    ],
  },
  Beverage: {
    disclaimer: '',
    sections: [
      {
        title: 'House Cocktails',
        items: [
          { name: 'Carosa', desc: 'Supersized Mimosa', tags: [] },
          { name: 'Midnight Blue', desc: 'Elijah Craig rye, averna amaro, demerara, bitters', tags: [] },
          { name: 'Rose All Day Sangria', desc: 'Altered Dimension Rosé, strawberry, ginger beer', tags: [] },
          { name: 'The Phoenix', desc: 'Codigo 1530 Reposado, chiltepines, mesquite honey syrup, lemon, prickly pear', tags: [] },
          { name: 'Desert Peach', desc: 'Roxx Vodka, Lillet Blanc, white peach puree, demerara, lime', tags: [] },
          { name: 'Vaquero', desc: 'Bulleit Bourbon, blackberry monin, simple, lime', tags: [] },
          { name: 'Purple Rain', desc: 'Luna Malvada Plata, Giffard Violette, egg white, simple, lemon, Angostura', tags: [] },
          { name: 'Bridge & Tunnel', desc: 'Roku Gin, watermelon real, ginger monin, lime, mint', tags: [] },
          { name: 'Painted Desert', desc: "Tito's Vodka, St Germain, cucumber, mint syrup, lime", tags: [] },
          { name: 'Coyote N/A', desc: 'Ginger beer, lavender honey, lemon, mint', tags: ['N/A'] },
          { name: 'Calor Seco N/A', desc: "Sparkling jasmine tea, Lyre's Italian Orange, soda, orange", tags: ['N/A'] },
        ],
      },
      {
        title: 'Draft Beer',
        items: [
          { name: 'Carcara Urban Sunset', desc: 'Huss Brewing — Mexican Lager', tags: [] },
          { name: 'Spell Binder', desc: 'Wren House — Hazy IPA', tags: [] },
          { name: 'AZ Light', desc: 'Huss Brewing — IPA', tags: [] },
          { name: 'Michelob Ultra', desc: 'American Lager', tags: [] },
          { name: "Nolan's Porter", desc: 'Barrio Brewing — American Porter', tags: [] },
        ],
      },
      {
        title: 'Bottled & Canned Beer',
        items: [
          { name: 'HopKnot', desc: 'Four Peaks Brewing — IPA', tags: [] },
          { name: 'Paulaner Hefe', desc: 'Paulaner — Hefeweizen', tags: [] },
          { name: 'Oak Creek Amber', desc: 'Oak Creek Brewing — Amber Ale', tags: [] },
          { name: 'Kilt Lifter', desc: 'Four Peaks Brewing — Scottish Amber Ale', tags: [] },
          { name: 'Dragoon IPA', desc: 'Dragoon Brewing — West-Coast IPA', tags: [] },
          { name: 'Prickly Pearadise', desc: '2 Towns Ciderhouse — Prickly Pear Cider', tags: [] },
          { name: 'Athletic Brewing', desc: 'Non-Alcoholic', tags: ['N/A'] },
          { name: 'High Noon', desc: 'Black Cherry or Pineapple', tags: [] },
        ],
      },
      {
        title: 'Sparkling Wine',
        items: [
          { name: 'Mionetto', desc: 'Prosecco — Veneto, Italy', tags: [] },
          { name: 'Silvergate', desc: 'Sparkling — Spain', tags: [] },
          { name: 'Veuve Clicquot', desc: 'Champagne, Yellow Label — France', tags: [] },
          { name: 'Chandon', desc: 'Sparkling Rosé Brut — California', tags: [] },
          { name: 'Vino Volta', desc: 'Pet-Nat Grenache — Swan Valley, Australia', tags: [] },
          { name: 'Whispering Angel', desc: 'Rosé — Côtes de Provence, France', tags: [] },
          { name: 'Elio Perrone, Bigaro Sparkling Rosé', desc: 'Muscat, Brachetto — Piedmont, Italy', tags: [] },
        ],
      },
      {
        title: 'White Wine',
        items: [
          { name: 'Cakebread', desc: 'Chardonnay — Napa Valley, CA', tags: [] },
          { name: 'Pavette', desc: 'Chardonnay — Santa Barbara, CA', tags: [] },
          { name: 'Giuseppe & Luigi', desc: 'Pinot Grigio — Friuli, Italy', tags: [] },
          { name: 'Sonoma Cutrer', desc: 'Chardonnay — Sonoma County, CA', tags: [] },
          { name: 'La Fiera', desc: 'Moscato — Sicily, Italy', tags: [] },
          { name: 'Running Wild', desc: 'Chardonnay — Paicines, CA', tags: [] },
          { name: 'Domain Guy Robin', desc: 'Chardonnay "Vielles Vignes" — Chablis, France', tags: [] },
          { name: 'Lone Birch', desc: 'Pinot Gris — Yakima Valley, WA', tags: [] },
          { name: 'Merkin Vineyard', desc: 'White Blend "Chupacabra Blanca" — Wilcox, Arizona', tags: [] },
          { name: 'Barnard Griffin', desc: 'Sauvignon Blanc — Columbia Valley, WA', tags: [] },
          { name: 'Marques de Caceres Deusa Nai', desc: 'Albariño — Rías Baixas, Spain', tags: [] },
        ],
      },
      {
        title: 'Rosé & Orange Wine',
        items: [
          { name: 'Krasno', desc: 'Orange — Brda, Slovenia', tags: [] },
          { name: 'Fleurs de Prairie', desc: 'Rosé — Languedoc, France', tags: [] },
          { name: 'Page Springs', desc: 'Rosé — Cornville, Arizona', tags: [] },
        ],
      },
      {
        title: 'Red Wine',
        items: [
          { name: 'Justin', desc: 'Cabernet Sauvignon — Paso Robles, CA', tags: [] },
          { name: 'Sunspell', desc: 'Cabernet Sauvignon — Australia', tags: [] },
          { name: 'Alamos', desc: 'Malbec — Mendoza, Argentina', tags: [] },
          { name: 'Silver Oak', desc: 'Cabernet Sauvignon — Alexander Valley, CA', tags: [] },
          { name: "Montinore Estate 'Red Cap'", desc: 'Pinot Noir — Willamette, Oregon', tags: [] },
          { name: 'Pavette', desc: 'Pinot Noir — Central Coast, CA', tags: [] },
          { name: 'Flowers', desc: 'Pinot Noir — Sonoma Coast, CA', tags: [] },
          { name: 'The Prisoner', desc: 'Red Blend — Napa Valley, CA', tags: [] },
          { name: 'Saintes Pierres de Nalys', desc: 'Red Blend — Châteauneuf-du-Pape, France', tags: [] },
          { name: 'Joseph Phelps', desc: 'Red Blend "Insignia" — Napa Valley, CA', tags: [] },
          { name: 'Segla', desc: 'Red Blend — Margaux, Bordeaux, France', tags: [] },
          { name: 'Los Milics', desc: 'Tempranillo "Lorenzo\'s" — Sonoita, Arizona', tags: [] },
          { name: 'Numanthia', desc: 'Tempranillo "Termes" — Toro, Spain', tags: [] },
        ],
      },
      {
        title: 'Non-Alcoholic Wine',
        items: [
          { name: 'Copenhagen', desc: 'Sparkling Jasmine Tea "Bla" — Denmark', tags: ['N/A'] },
          { name: 'Fre Sauvignon Blanc', desc: 'California', tags: ['N/A'] },
          { name: 'Fre Cabernet Sauvignon', desc: 'California', tags: ['N/A'] },
        ],
      },
      {
        title: 'Port',
        items: [
          { name: 'Fonseca Tawny 10yr Aged Porto', desc: 'Portugal', tags: [] },
        ],
      },
    ],
  },
}

const tagColors = {
  GF: 'bg-amber-100 text-amber-700 border border-amber-200',
  V:  'bg-green-100 text-green-700 border border-green-200',
  VG: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  'N/A': 'bg-sky-100 text-sky-600 border border-sky-200',
}

function Tag({ label }) {
  return (
    <span className={`inline-block text-[0.52rem] px-1.5 py-0.5 rounded-sm font-sans font-semibold tracking-wider uppercase ${tagColors[label] || 'bg-stone-100 text-stone-500'}`}>
      {label}
    </span>
  )
}

function MenuItem({ item }) {
  return (
    <div className="flex items-start gap-3 py-3.5 border-b border-stone-100 group hover:bg-amber-50/60 -mx-2 px-2 rounded transition-colors duration-200 cursor-default">
      <div className="flex-1 min-w-0">
        <div className="flex items-start flex-wrap gap-1.5 mb-0.5">
          <span className="font-serif text-stone-800 text-[0.98rem] leading-snug group-hover:text-amber-900 transition-colors duration-200">
            {item.name}
          </span>
          <div className="flex items-center gap-1 mt-0.5">
            {item.tags?.map(t => <Tag key={t} label={t} />)}
          </div>
        </div>
        {item.desc && (
          <p className="text-stone-400 text-[0.76rem] leading-relaxed font-sans font-light mt-0.5">
            {item.desc}
          </p>
        )}
        {item.addons?.length > 0 && (
          <p className="text-amber-600/80 text-[0.67rem] mt-1.5 font-sans font-light italic">
            {item.addons.join(' · ')}
          </p>
        )}
      </div>
    </div>
  )
}

function MenuSection({ section }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-4 h-px bg-amber-400" />
        <h4 className="text-[0.58rem] tracking-[0.42em] uppercase text-amber-600 font-sans font-semibold">
          {section.title}
        </h4>
        <span className="flex-1 h-px bg-stone-100" />
      </div>
      <div className="grid md:grid-cols-2 gap-x-12">
        {section.items.map((item, i) => (
          <MenuItem key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

const tabs = Object.keys(menuData)

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Dinner')
  const current = menuData[activeTab]

  return (
    <section id="menu" className="bg-[#faf7f2] py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="flex items-center gap-3 text-amber-700 text-[0.6rem] tracking-[0.5em] uppercase font-sans mb-4">
            <span className="w-7 h-px bg-amber-600" /> Our Menu
          </p>
          <h2 className="font-serif text-stone-800 text-4xl md:text-5xl font-normal leading-tight">
            What We're <em className="italic text-stone-500">Serving</em>
          </h2>
          <p className="text-stone-400 text-sm font-sans font-light mt-2">
            Fresh, seasonal, thoughtfully crafted.
          </p>
        </div>

        {/* Tab bar — horizontal scrollable on mobile */}
        <div className="overflow-x-auto pb-1 mb-8">
          <div className="flex gap-2 min-w-max">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-[0.62rem] tracking-[0.22em] uppercase font-sans font-normal whitespace-nowrap transition-all duration-250 ${
                  activeTab === tab
                    ? 'bg-stone-800 text-amber-100 shadow-sm'
                    : 'bg-white border border-stone-200 text-stone-500 hover:border-stone-400 hover:text-stone-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
          >
            {current.disclaimer && (
              <div className="mb-8 inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2.5 rounded">
                <span className="w-3 h-px bg-amber-400 shrink-0" />
                <p className="text-amber-700 text-[0.7rem] font-sans font-light">{current.disclaimer}</p>
              </div>
            )}

            {/* Sections */}
            {current.sections.map((section, i) => (
              <MenuSection key={i} section={section} />
            ))}

            {/* Legend */}
            <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap gap-x-5 gap-y-2 items-center">
              <span className="text-stone-300 text-[0.6rem] uppercase tracking-widest font-sans">Key</span>
              {Object.keys(tagColors).map(label => (
                <span key={label} className="flex items-center gap-1.5">
                  <Tag label={label} />
                  <span className="text-stone-400 text-[0.65rem] font-sans font-light">
                    {label === 'GF' ? 'Gluten-Friendly' : label === 'V' ? 'Vegan' : label === 'VG' ? 'Vegetarian' : 'Non-Alcoholic'}
                  </span>
                </span>
              ))}
              <span className="text-stone-300 text-[0.62rem] font-sans font-light ml-auto">
                * Consuming undercooked items may increase risk of foodborne illness
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}