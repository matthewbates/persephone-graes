import Antipasto from "../assets/Antipasto.png";
import Barker from "../assets/Barker.png";
import BiscuitsAndGravy from "../assets/BiscuitsAndGravy.png";
import BLTAP from "../assets/BLTAP.png";
import BreakfastBurrito from "../assets/BreakfastBurrito.png";
import BreakfastPlatter from "../assets/BreakfastPlatter.png";
import BreakfastSandwich from "../assets/BreakfastSandwich.png";
import Caesar from "../assets/Caesar.png";
import Chips from "../assets/Chips.png";
import Cobb from "../assets/Cobb.png";
import Coffee from "../assets/Coffee.png";
import Crawford from "../assets/Crawford.png";
import Fajita from "../assets/Fajita.png";
import FrenchDip from "../assets/FrenchDip.png";
import FrenchToast from "../assets/FrenchToast.png";
import GFPancakes from "../assets/GFPancakes.png";
import Gobbler from "../assets/Gobbler.png";
import GrilledMacCheese from "../assets/GrilledMacCheese.png";
import HuevosRancheros from "../assets/HuevosRancheros.png";
import Incline from "../assets/Incline.png";
import Juices from "../assets/Juices.png";
import MissPiggy from "../assets/MissPiggy.png";
import Pancakes from "../assets/Pancakes.png";
import PicnicBasket from "../assets/PicnicBasket.png";
import PigsInABasket from "../assets/PigsInABasket.png";
import RainbowFalls from "../assets/RainbowFalls.png";
import RedRock from "../assets/RedRock.png";
import Reuben from "../assets/Reuben.png";
import Ruxton from "../assets/Ruxton.png";
import SevenFalls from "../assets/SevenFalls.png";
import ShellsAndCheese from "../assets/ShellsAndCheese.png";
import Soda from "../assets/Soda.png";
import SteakAndCheese from "../assets/SteakAndCheese.png";

export const menu = [
  {
    id: 1,
    title: "Breakfast Platter",
    category: "breakfast",
    price: 11.0,
    img: BreakfastPlatter,
    desc: `2 Eggs Any Style with Your Choice of: 3 Pieces of Bacon · 2 Sausage Patties · 2 Chorizo Patties · 1 Ham Steak | HomeFries · Hashbrowns · Seasonal Fruit | Toast · English Muffin · Biscuit · 1 Pancake`,
  },
  {
    id: 2,
    title: "Breakfast Burrito",
    category: "breakfast",
    price: 11.0,
    img: BreakfastBurrito,
    desc: "2 Scrambled Eggs with Cheese & Your Choice of: Bacon · Sausage · Chorizo · Ham | Home Fries · Hashbrowns | Wrapped in a Flour Tortilla\nSmother it in Homemade Green Chili for 3.50",
  },
  {
    id: 3,
    title: "Biscuits & Gravy",
    category: "breakfast",
    price: "1/2: 5.50 | Full: 9.50",
    img: BiscuitsAndGravy,
    desc: "Fluffy Buttermilk Biscuits Smothered in Homemade Sausage Gravy\nAdd 2 Eggs Any Style for 2.50",
  },
  {
    id: 4,
    title: "Crunchy French Toast",
    category: "breakfast",
    price: 9.0,
    img: FrenchToast,
    desc: "4 Pieces of French Toast Coated in Frosted Flakes & Fried Golden Brown (Traditional Style also Available)\nAdd Fruit Topping for 1.50",
  },
  {
    id: 5,
    title: "Pancakes",
    category: "breakfast",
    price: "One: 2.75 | Two: 5.25 | Three: 7.50",
    img: Pancakes,
    desc: "Homemade Buttermilk Pancakes (Wheat Available Upon Request)\nAdd Fruit Topping for 1.50",
  },
  {
    id: 6,
    title: "Huevos Rancheros",
    category: "breakfast",
    price: 11.0,
    img: HuevosRancheros,
    desc: "A Grilled Flour Tortilla, Stuffed with Cheese & Smothered in Green Chili. Topped with 2 Eggs Any Style\nAdd Sour Cream for 1.00",
  },
  {
    id: 7,
    title: "Gluten Free Pancakes",
    category: "breakfast",
    price: "One: 2.75 | Two: 5.25 | Three: 7.50",
    img: GFPancakes,
    desc: "Same great taste as our buttermilk pancakes, but completely gluten-free\nAdd Fruit Topping for 1.50",
  },
  {
    id: 8,
    title: "Breakfast Sandwich",
    category: "breakfast",
    price: 11.0,
    img: BreakfastSandwich,
    desc: "2 Eggs Any Style on Your Choice of: Toast · English Muffin · Biscuit · 2 Small Pancakes | American · Cheddar · Swiss · Smoked Gouda · Provolone | 2 Pieces of Bacon · 1 Sausage Patty · 1 Ham Steak |  With Homefries, Hashbrowns, Or Seasonal Fruit on the Side",
  },
  {
    id: 9,
    title: "Pig in a Basket",
    category: "breakfast",
    price: "One: 6.00 | Two: 11.00",
    img: PigsInABasket,
    desc: "Savory Sausage Patty in the Middle of our Homemade Bread, Battered French Toast Style & Cooked to a Golden Brown\nAdd 2 Eggs Any Style for 2.50",
  },
  {
    id: 10,
    title: "Reuben",
    category: "sandwiches",
    price: 12.0,
    img: Reuben,
    desc: "1/2 lb. of Our Slow Roasted Corned Beef, Topped with Swiss, Sauerkraut, & Thousand Island Dressing Served on Toasted Marble Rye",
  },
  {
    id: 11,
    title: "B.L.T.A.P.",
    category: "sandwiches",
    price: 13.0,
    img: BLTAP,
    desc: "1/2 lb. of Bacon, with Lettuce, Tomato, Avocado & Provolone on Toasted Homemade Bread",
  },
  {
    id: 12,
    title: "French Dip",
    category: "sandwiches",
    price: 12.0,
    img: FrenchDip,
    desc: "1/2 lb. of Our Slow Roasted, Thin Sliced Beef Topped with Sautéed Onions, Mushrooms & Smoked Gouda Served on a Homemade Hoagie Roll",
  },
  {
    id: 13,
    title: "Grilled Mac 'n Cheese",
    category: "sandwiches",
    price: 9.0,
    img: GrilledMacCheese,
    desc: "Our Signature Shells 'n' Cheese with Smoked Gouda, Between Two Slices of Toasted Homemade Bread\nAdd Crumbled Bacon for 1.50",
  },
  {
    id: 14,
    title: "The Miss Piggy",
    category: "sandwiches",
    price: 11.0,
    img: MissPiggy,
    desc: "Our Smoked Ham with Swiss, Red Onion, Dijon Mustard, on Toasted Marble Rye",
  },
  {
    id: 15,
    title: "Steak & Cheese",
    category: "sandwiches",
    price: 12.0,
    img: SteakAndCheese,
    desc: "1/2 lb. of Our Slow Roasted, Thin Sliced Beef with Sautéed Peppers, Onions & Cheddar Sauce on a Homemade Hoagie Roll",
  },
  {
    id: 16,
    title: "The Manitou Gobbler",
    category: "sandwiches",
    price: 11.0,
    img: Gobbler,
    desc: "Thin Sliced Roasted Turkey Breast, with Bacon, Candied Jalepeño Cranberry Sauce & Provolone on Our Homemade Bread",
  },
  {
    id: 17,
    title: "The Red Rock",
    category: "sandwiches",
    price: 13.0,
    img: RedRock,
    desc: "Pepperoni, Smoked Ham, Salami, Lettuce, Tomato, Pepperoncini, Olives, Red Onions, Parmesean, Provolone & a Drizze of Italian Dressing",
  },
  {
    id: 18,
    title: "The Barker Club",
    category: "sandwiches",
    price: 13.0,
    img: Barker,
    desc: "Slow Roasted Turkey, Ham, Bacon, Provolone, Lettuce, Tomato & Onion Served on a Homemade Hoagie Roll",
  },
  {
    id: 19,
    title: "The Crawford",
    category: "sandwiches",
    price: 11.0,
    img: Crawford,
    desc: "1/2 lb. of our Slow Roasted, Thin Sliced Beef, Aged Cheddar & Creamy Horseradish Sauce Served on a Homemade Hoagie Roll",
  },
  {
    id: 20,
    title: "The Incline",
    category: "sandwiches",
    price: 13.0,
    img: Incline,
    desc: "Smoked Ham, Roast Beef, Roasted Turkey, Swiss, Lettuce, Tomato, Onion, & Avocado Dill Spread on Homemade Bread",
  },
  {
    id: 21,
    title: "Rainbow Falls",
    category: "sandwiches",
    price: 13.0,
    img: RainbowFalls,
    desc: "Gulf Shrimp, Pickled Carrots, Lettuce, Tomato, Avocado, Mandarin Oranges, Cucumber, Crispy Chow Mein Noodles & a Seasame Ginger Drizzle on a Homemade Hoagie Roll",
  },
  {
    id: 22,
    title: "The Ruxton",
    category: "sandwiches",
    price: 10.0,
    img: Ruxton,
    desc: "Mixed Greens, Marinated Chickpeas, Tomato, Onion, Avocado, Picked Carrots, Cucumbers, with a Drizzle of Balsamic Vinaigrette on a Homemade Hoagie Roll",
  },
  {
    id: 23,
    title: "The Barker",
    category: "salads & wraps",
    price: 9.0,
    img: Barker,
    desc: "Fresh Romaine, Onions, Tomoatoes, Carrots, Black Olives, Cucumbers, Shredded Cheese, & Your Choice of Dressing\nAdd Chicken for 3.50 | Add Shrimp for 4.50",
  },
  {
    id: 24,
    title: "Caesar",
    category: "salads & wraps",
    price: 9.0,
    img: Caesar,
    desc: "Fresh Romaine Tossed in House Caesar Dressing with Homemade Croutons & Aged Parmesan\nAdd Chicken for 3.50 | Add Shrimp for 4.50",
  },
  {
    id: 25,
    title: "Cobb",
    category: "salads & wraps",
    price: 11.0,
    img: Cobb,
    desc: "Mixed Greens, Oven Roasted Chicken, Bacon, Tomatoes, Red Onion, Avocado, Bleu Cheese, Hard Boiled Egg & Your Choice of Dressing\nAdd Shrimp for 4.50",
  },
  {
    id: 26,
    title: "Seven Falls",
    category: "salads & wraps",
    price: 12.5,
    img: SevenFalls,
    desc: "Mixed Greens, Gulf Shrimp, Pickled Carrots, Avocado, Mandarin Oranges, Cucumber, Crispy Wonton Strips & Sesame Ginger Dressing",
  },
  {
    id: 27,
    title: "Antipasto",
    category: "salads & wraps",
    price: 12.0,
    img: Antipasto,
    desc: "Mixed Greens, Pepperoni, Smoked Ham, Salami, Pepperoncini, Olives, Red Onions, Parmesan, Provolone, & a Drizzle of House Made Italian Dressing",
  },
  {
    id: 28,
    title: "Fajita",
    category: "salads & wraps",
    price: "Chicken: 11.00 | Beef: 12.00 | Shrimp: 13.00",
    img: Fajita,
    desc: "Romaine Lettuce Topped with Sautéed Peppers & Onions, Tomatoes, Black Olives, Avocado, Shredded Cheese & Sour Cream\nAdd an Additional Protien for 4.00",
  },
  {
    id: 29,
    title: "Homemade Potato Chips",
    category: "sides & drinks",
    price: 5.0,
    img: Chips,
    desc: "Thin Sliced, Seasoned & Cooked to Perfections\nCheese: 1.25 | Crumbled Bacon: 1.50 | Red or Green Chili: 3.50",
  },
  {
    id: 30,
    title: "Shells 'n Cheese",
    category: "sides & drinks",
    price: "Cup: 5.25 | Bowl: 9.50",
    img: ShellsAndCheese,
    desc: "Homemade Cheese Sauce Served over Tender Shells\nExtra Cheese: 1.25 | Crumbled Bacon: 1.50 | Roasted Chicken: 3.50 | Red or Green Chili: 3.50 | Gulf Shrimp: 4.50",
  },
  {
    id: 31,
    title: "Juices & Smoothies",
    category: "sides & drinks",
    price: "",
    img: Juices,
    desc: "Ask Our Servers About Our Delicious, Seasonal Drinks!",
  },
  {
    id: 32,
    title: "Fresh Brewed Coffee",
    category: "sides & drinks",
    price: 3.5,
    img: Coffee,
    desc: "Flavored Syrup, Cream, & Sugar Available Upon Request",
  },
  {
    id: 33,
    title: "Fountain Sodas",
    category: "sides & drinks",
    price: 3.0,
    img: Soda,
    desc: "Coke · Diet Coke · Sprite · Sweet Tea (Unsweet Also Available)",
  },
];
