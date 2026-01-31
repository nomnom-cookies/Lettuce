const produceData = [
    {
        id: 1,
        name: "Strawberry",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=250&h=250&fit=crop",
        months: ["March", "April", "May", "June"],
        regions: ["san-francisco", "los-angeles", "san-diego", "central-valley"],
        description: "Bright red, heart-shaped berries with a sweet and slightly tart flavor. Small seeds on the outside, juicy interior. About 1-2 inches in diameter. Delicate texture requires gentle handling. Storage: Refrigerate unwashed in the crisper drawer for up to 7 days. Store away from ethylene-producing fruits.",
        recipes: ["Strawberry shortcake", "Fresh fruit smoothies", "Strawberry jam", "Strawberry cheesecake", "Chocolate-dipped strawberries"],
        links: [
            { title: "Strawberry nutrition facts", url: "https://www.google.com/search?q=strawberry+nutrition" },
            { title: "Growing strawberries in California", url: "https://www.google.com/search?q=grow+strawberries+california" }
        ]
    },
    {
        id: 2,
        name: "Avocado",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February"],
        regions: ["los-angeles", "san-diego", "inland-empire"],
        description: "Pear-shaped fruit with bumpy, dark green skin. Creamy pale green interior with a large brown pit. Rich, buttery texture. About the size of a human fist. Ripens soft over several days. Storage: Keep at room temperature until ripe (2-3 days), then refrigerate for 3-5 days. To speed ripening, place in paper bag.",
        recipes: ["Guacamole", "Avocado toast", "Avocado salad", "Avocado smoothies", "Avocado deviled eggs"],
        links: [
            { title: "Avocado health benefits", url: "https://www.google.com/search?q=avocado+health+benefits" },
            { title: "California avocado production", url: "https://www.google.com/search?q=california+avocado" }
        ]
    },
    {
        id: 3,
        name: "Orange",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1582979788784-aac1b96b15a5?w=250&h=250&fit=crop",
        months: ["November", "December", "January", "February", "March"],
        regions: ["central-valley", "inland-empire"],
        description: "Round citrus fruit with thick, bumpy orange skin. Sweet and juicy interior with white pith underneath the skin. Segmented flesh. About the size of a tennis ball. Sweet-tart flavor. Storage: Keep at room temperature for 2 weeks or refrigerate for up to 4 weeks in the crisper drawer.",
        recipes: ["Fresh orange juice", "Orange marmalade", "Orange chicken", "Orange tart", "Orange smoothies"],
        links: [
            { title: "Citrus nutrition", url: "https://www.google.com/search?q=orange+citrus+nutrition" },
            { title: "California orange farming", url: "https://www.google.com/search?q=california+orange+farming" }
        ]
    },
    {
        id: 4,
        name: "Tomato",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1582254451390-06f0fc3e18ce?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August", "September"],
        regions: ["central-valley", "san-francisco", "los-angeles"],
        description: "Round, smooth fruit with bright red skin. Juicy interior with seeds. Ranges from fist-sized to smaller cherry varieties. Sweet and tangy flavor. Slightly soft when ripe. Storage: Keep at room temperature away from sunlight. Do not refrigerate as cold damages flavor. Use within 5-10 days.",
        recipes: ["Tomato sauce", "Pasta marinara", "Salsa", "Tomato soup", "Caprese salad"],
        links: [
            { title: "Tomato varieties", url: "https://www.google.com/search?q=tomato+varieties" },
            { title: "Growing tomatoes in California", url: "https://www.google.com/search?q=grow+tomatoes+california" }
        ]
    },
    {
        id: 5,
        name: "Bell Pepper",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1606075246585-c2869e14e57f?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August", "September"],
        regions: ["central-valley", "san-diego"],
        description: "Three or four-lobed vegetable with glossy, smooth skin. Comes in red, yellow, orange, and green. Hollow interior with seeds and white membrane. Sweet flavor. Size varies from 3-5 inches tall. Storage: Refrigerate in the crisper drawer for up to 2 weeks in a plastic bag.",
        recipes: ["Stuffed peppers", "Fajitas", "Pepper stir-fry", "Roasted peppers", "Pepper and egg fried rice"],
        links: [
            { title: "Pepper nutrition", url: "https://www.google.com/search?q=bell+pepper+nutrition" },
            { title: "California pepper growing guide", url: "https://www.google.com/search?q=california+bell+pepper" }
        ]
    },
    {
        id: 6,
        name: "Lettuce",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "October", "November", "December"],
        regions: ["san-francisco", "central-valley"],
        description: "Leafy green with crinkled or smooth leaves depending on variety. Tender, crisp texture. Mild flavor. Grows in a head about 6-8 inches in diameter. Light green to dark green coloring. Storage: Wrap in damp paper towel and refrigerate in crisper for up to 10 days. Keep separate from ethylene-producing fruits.",
        recipes: ["Garden salad", "Caesar salad", "Lettuce wraps", "Salad sandwiches", "Wilted lettuce sides"],
        links: [
            { title: "Lettuce varieties guide", url: "https://www.google.com/search?q=lettuce+varieties" },
            { title: "California salad greens production", url: "https://www.google.com/search?q=california+lettuce+production" }
        ]
    },
    {
        id: 7,
        name: "Broccoli",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February", "March"],
        regions: ["central-valley", "san-francisco"],
        description: "Green vegetable with a thick central stalk and tree-like florets on top. Bumpy, knobby texture. Dark green color. Mild flavor with slight sweetness. Head is about 3-5 inches in diameter. Storage: Refrigerate in a plastic bag for up to 5 days. Store away from ethylene-producing fruits.",
        recipes: ["Steamed broccoli", "Broccoli cheese soup", "Stir-fried broccoli", "Roasted broccoli", "Broccoli salad"],
        links: [
            { title: "Broccoli health benefits", url: "https://www.google.com/search?q=broccoli+health+benefits" },
            { title: "Cooking broccoli tips", url: "https://www.google.com/search?q=how+to+cook+broccoli" }
        ]
    },
    {
        id: 8,
        name: "Blueberry",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August"],
        regions: ["central-valley", "san-francisco"],
        description: "Small, round berry with smooth, dark blue skin and a silvery waxy coating. Tiny crown-like stem on top. Sweet-tart flavor. About pea-sized to slightly larger. Juicy interior with small seeds. Storage: Refrigerate in original container or glass bowl for up to 10 days. Wash just before eating.",
        recipes: ["Blueberry muffins", "Blueberry pie", "Smoothie bowls", "Blueberry jam", "Fresh berry salads"],
        links: [
            { title: "Blueberry antioxidants", url: "https://www.google.com/search?q=blueberry+antioxidants" },
            { title: "Growing blueberries in California", url: "https://www.google.com/search?q=grow+blueberries+california" }
        ]
    },
    {
        id: 9,
        name: "Carrot",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1447521910452-1d33e7cc420b?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "September", "October", "November", "December"],
        regions: ["central-valley"],
        description: "Long, tapered vegetable with smooth, thin skin. Bright orange color. Crisp, sweet interior. Traditional carrots are 6-8 inches long. Root vegetable with slightly earthy flavor. Storage: Remove green tops and refrigerate in plastic bag for up to 3-4 weeks. Can last longer in cool storage.",
        recipes: ["Carrot cake", "Roasted carrots", "Carrot juice", "Carrot soup", "Glazed carrots"],
        links: [
            { title: "Carrot nutrition facts", url: "https://www.google.com/search?q=carrot+nutrition" },
            { title: "California carrot farming", url: "https://www.google.com/search?q=california+carrot+farming" }
        ]
    },
    {
        id: 10,
        name: "Peach",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1585518419759-47e843dc91d3?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley", "inland-empire"],
        description: "Round fruit with fuzzy, velvety skin in golden-orange color with red blush. Large pit in the center. Sweet, juicy yellow or white flesh. About the size of a fist. Soft when ripe. Storage: Keep at room temperature until ripe, then refrigerate for up to 5 days. Place in paper bag to ripen faster.",
        recipes: ["Peach cobbler", "Peach pie", "Peach jam", "Peach smoothies", "Grilled peaches"],
        links: [
            { title: "Peach varieties guide", url: "https://www.google.com/search?q=peach+varieties" },
            { title: "California peach farming", url: "https://www.google.com/search?q=california+peach+production" }
        ]
    },
    {
        id: 11,
        name: "Spinach",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "October", "November", "December"],
        regions: ["san-francisco", "central-valley"],
        description: "Dark green leafy vegetable with tender, slightly wrinkled leaves. Smooth or crumpled texture depending on variety. Mild, slightly sweet flavor. Delicate leaves. Rich nutritional value. Storage: Wrap in damp paper towel and refrigerate in crisper for up to 10 days. Keep away from fruits.",
        recipes: ["Spinach salad", "Spinach smoothies", "Creamed spinach", "Spinach pasta", "Spinach egg dishes"],
        links: [
            { title: "Spinach nutrition", url: "https://www.google.com/search?q=spinach+nutrition" },
            { title: "Cooking spinach tips", url: "https://www.google.com/search?q=how+to+cook+spinach" }
        ]
    },
    {
        id: 12,
        name: "Grape",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1585518469905-9c1f36fc0d68?w=250&h=250&fit=crop",
        months: ["August", "September", "October", "November"],
        regions: ["central-valley"],
        description: "Small, round berry that grows in clusters on vines. Smooth, thin skin in green, red, or purple colors. Sweet, juicy interior. Size of a marble to slightly larger. Seeds may be present. Storage: Keep refrigerated in the crisper drawer in original packaging for up to 2 weeks.",
        recipes: ["Grape juice", "Fruit salads", "Frozen grapes", "Grape jam", "Wine making"],
        links: [
            { title: "Grape varieties", url: "https://www.google.com/search?q=grape+varieties" },
            { title: "California grape growing", url: "https://www.google.com/search?q=california+grape+vineyard" }
        ]
    },
    {
        id: 13,
        name: "Kale",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1615485281280-bc11f28f39d2?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February", "March"],
        regions: ["central-valley", "san-francisco"],
        description: "Leafy green cruciferous vegetable with deeply curled or flat, textured leaves. Ranges from dark green to purple colors. Hearty, slightly bitter flavor. Leaves are 6-12 inches long. Storage: Refrigerate in plastic bag for up to 10 days. Kale is very hardy and lasts longer than delicate greens.",
        recipes: ["Kale chips", "Green smoothies", "Kale salad", "Sautéed kale", "Kale soup"],
        links: [
            { title: "Kale nutrition benefits", url: "https://www.google.com/search?q=kale+health+benefits" },
            { title: "Cooking kale recipes", url: "https://www.google.com/search?q=kale+recipes" }
        ]
    },
    {
        id: 14,
        name: "Zucchini",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1528746532446-37d4b5faf0bb?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August", "September"],
        regions: ["central-valley", "san-francisco"],
        description: "Long, cylindrical summer squash with smooth, thin, dark green skin. Pale green interior flesh with seeds. About 6-8 inches long. Mild, slightly sweet flavor. Tender skin. Storage: Refrigerate in crisper drawer for up to 5 days. Do not wash until ready to use.",
        recipes: ["Zucchini bread", "Grilled zucchini", "Zucchini noodles", "Stuffed zucchini", "Zucchini fritters"],
        links: [
            { title: "Zucchini preparation", url: "https://www.google.com/search?q=how+to+prepare+zucchini" },
            { title: "Zucchini recipes", url: "https://www.google.com/search?q=zucchini+recipes" }
        ]
    },
    {
        id: 15,
        name: "Raspberries",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1605471423411-07134e71a2a9?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August"],
        regions: ["central-valley", "san-francisco"],
        description: "Small, delicate berries composed of many drupelets. Colors range from red to black to golden. Sweet-tart flavor. Fragile texture. About the size of a large pea. Storage: Refrigerate in original container for 1-2 days only. Freeze for longer storage. Handle gently as they bruise easily.",
        recipes: ["Raspberry jam", "Raspberry cheesecake", "Fresh raspberry sauce", "Raspberry smoothies", "Raspberry tarts"],
        links: [
            { title: "Raspberry nutrition", url: "https://www.google.com/search?q=raspberry+nutrition" },
            { title: "Growing raspberries", url: "https://www.google.com/search?q=grow+raspberries+california" }
        ]
    },
    {
        id: 16,
        name: "Cucumber",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1590179253623-0c5336be0b1b?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August", "September"],
        regions: ["central-valley"],
        description: "Long, slender vegetable with bumpy or smooth thin green skin. Watery interior with seeds in the center. About 6-12 inches long. Mild, refreshing flavor. Crisp texture when fresh. Storage: Refrigerate in crisper drawer for up to 1 week. Keep separate from ethylene-producing fruits.",
        recipes: ["Cucumber salad", "Pickles", "Cucumber sandwiches", "Tzatziki sauce", "Infused water"],
        links: [
            { title: "Cucumber varieties", url: "https://www.google.com/search?q=cucumber+varieties" },
            { title: "Pickling cucumbers", url: "https://www.google.com/search?q=how+to+pickle+cucumbers" }
        ]
    },
    {
        id: 17,
        name: "Almonds",
        category: "Nut",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["August", "September", "October"],
        regions: ["central-valley"],
        description: "Stone fruits enclosed in hard shells with brown skin and tan interior kernels. Crunchy texture, sweet to slightly bitter flavor. About the size of a marble. California produces 80% of the world's almonds. Storage: Keep in cool, dry place or refrigerate for up to 2 years. Can be stored in freezer.",
        recipes: ["Almond butter", "Roasted almonds", "Almond milk", "Almond flour baking", "Trail mix"],
        links: [
            { title: "Almond nutrition", url: "https://www.google.com/search?q=almond+nutrition+facts" },
            { title: "California almond farming", url: "https://www.google.com/search?q=california+almond+production" }
        ]
    },
    {
        id: 18,
        name: "Walnuts",
        category: "Nut",
        image: "https://images.unsplash.com/photo-1585518469905-9c1f36fc0d68?w=250&h=250&fit=crop",
        months: ["August", "September", "October", "November"],
        regions: ["central-valley"],
        description: "Tree nuts with hard, wrinkled shell enclosing convoluted brain-like kernels. Rich, earthy flavor with slight bitterness. Creamy texture. About the size of a walnut! Storage: Keep in cool, dry place for several months or refrigerate for up to a year.",
        recipes: ["Walnut butter", "Roasted walnuts", "Walnut cookies", "Salad toppings", "Walnut pasta"],
        links: [
            { title: "Walnut health benefits", url: "https://www.google.com/search?q=walnut+health+benefits" },
            { title: "California walnut production", url: "https://www.google.com/search?q=california+walnut+farming" }
        ]
    },
    {
        id: 20,
        name: "Artichoke",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=250&h=250&fit=crop",
        months: ["March", "April", "May", "September", "October"],
        regions: ["central-valley"],
        description: "Large thistle flower bud with overlapping scale-like leaves in green to purple. Meaty, slightly nutty flavor. Globe-shaped, about 3-5 inches in diameter. The tender inner leaves and heart are edible. Storage: Refrigerate in plastic bag with damp towel for up to 5 days.",
        recipes: ["Roasted artichokes", "Artichoke dip", "Stuffed artichokes", "Artichoke pasta", "Grilled artichokes"],
        links: [
            { title: "Artichoke preparation", url: "https://www.google.com/search?q=how+to+prepare+artichoke" },
            { title: "Artichoke recipes", url: "https://www.google.com/search?q=artichoke+recipes" }
        ]
    },
    {
        id: 21,
        name: "Asparagus",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1590621060103-cd6d97a04d28?w=250&h=250&fit=crop",
        months: ["February", "March", "April", "May"],
        regions: ["san-francisco", "central-valley"],
        description: "Slender green (or white and purple varieties) spears with closed tips. Tender yet slightly firm texture. Mild, slightly grassy flavor. About 6-9 inches long. Delicate tips are most prized. Storage: Stand upright in water in the refrigerator or wrap in damp paper for up to 5 days.",
        recipes: ["Roasted asparagus", "Asparagus soup", "Grilled asparagus", "Asparagus risotto", "Asparagus frittata"],
        links: [
            { title: "Asparagus nutrition", url: "https://www.google.com/search?q=asparagus+health+benefits" },
            { title: "Cooking asparagus", url: "https://www.google.com/search?q=how+to+cook+asparagus" }
        ]
    },
    {
        id: 22,
        name: "Brussels Sprouts",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1602628087435-9f89aef95c03?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February"],
        regions: ["central-valley"],
        description: "Small, green cabbage-like buds that grow along a central stalk. Tight, compact heads about 1-2 inches in diameter. Slightly bitter, nutty flavor that sweetens after frost. Firm, dense texture. Storage: Refrigerate in plastic bag for up to 10 days. Improve in flavor after exposure to frost.",
        recipes: ["Roasted Brussels sprouts", "Brussels sprouts chips", "Shredded Brussels salad", "Brussels sprouts soup", "Pan-fried Brussels sprouts"],
        links: [
            { title: "Brussels sprouts nutrition", url: "https://www.google.com/search?q=brussels+sprouts+health" },
            { title: "Roasting Brussels sprouts", url: "https://www.google.com/search?q=roasted+brussels+sprouts+recipe" }
        ]
    },
    {
        id: 23,
        name: "Cauliflower",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1584868547095-1b05e46b2ca8?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February", "March"],
        regions: ["central-valley"],
        description: "Cruciferous vegetable with white (also purple, orange, green varieties) tight florets clustered on a thick central stalk. Mild, slightly sweet flavor. Firm texture. Head is about 6-10 inches in diameter. Storage: Wrap in plastic bag and refrigerate for up to 5 days. Keep away from ethylene sources.",
        recipes: ["Roasted cauliflower", "Cauliflower rice", "Cauliflower soup", "Buffalo cauliflower", "Cauliflower pizza crust"],
        links: [
            { title: "Cauliflower nutrition", url: "https://www.google.com/search?q=cauliflower+health+benefits" },
            { title: "Cauliflower recipes", url: "https://www.google.com/search?q=cauliflower+recipes" }
        ]
    },
    {
        id: 24,
        name: "Celery",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810707-ba16c0a7feec?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley"],
        description: "Crunchy, pale green stalks with leafy green tops. Long, fibrous stalks about 12-18 inches tall. Mild, slightly salty, herbaceous flavor. Hollow interior. Very low in calories. Storage: Refrigerate in plastic bag for up to 2 weeks. Remove rubber band to allow air circulation.",
        recipes: ["Celery juice", "Celery soup", "Chicken salad with celery", "Celery sticks with dip", "Mirepoix base"],
        links: [
            { title: "Celery nutrition", url: "https://www.google.com/search?q=celery+nutrition+facts" },
            { title: "Growing celery", url: "https://www.google.com/search?q=grow+celery+california" }
        ]
    },
    {
        id: 25,
        name: "Lemons",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1587736945944-3eab726a0cc2?w=250&h=250&fit=crop",
        months: ["Year-round", "Peak: May-September"],
        regions: ["coastal-california", "central-valley"],
        description: "Bright yellow citrus fruit with bumpy, textured skin. Oval or elliptical shape, about 2-3 inches long. Very sour, acidic juice with a few seeds. Aromatic zest. Storage: Keep at room temperature for 2 weeks or refrigerate for up to 1 month.",
        recipes: ["Lemon water", "Lemonade", "Lemon cake", "Lemon fish", "Lemon curd"],
        links: [
            { title: "Lemon health benefits", url: "https://www.google.com/search?q=lemon+health+benefits" },
            { title: "California lemon farming", url: "https://www.google.com/search?q=california+lemon+production" }
        ]
    },
    {
        id: 26,
        name: "Cantaloupe",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1571407773269-1001a5ad2f59?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley"],
        description: "Large, round melon with beige netted skin and distinctive ridged pattern. Orange flesh inside with central seed cavity. Sweet, musky aroma when ripe. About 4-6 inches in diameter. Storage: Keep at room temperature until ripe (fragrant, slight softness at stem), then refrigerate for 5 days.",
        recipes: ["Cantaloupe smoothies", "Cantaloupe salad", "Cantaloupe with prosciutto", "Cantaloupe sorbet", "Melon fruit salad"],
        links: [
            { title: "Cantaloupe selection", url: "https://www.google.com/search?q=how+to+select+cantaloupe" },
            { title: "Melon farming California", url: "https://www.google.com/search?q=california+cantaloupe+farming" }
        ]
    },
    {
        id: 27,
        name: "Watermelon",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley", "inland-empire"],
        description: "Large, round or oblong melon with green rind (often with darker stripes). Bright red, juicy, sweet flesh with black seeds. Watery, refreshing texture. Can weigh 5-20 lbs. Storage: Keep at room temperature until ripe, then refrigerate for up to 1 week.",
        recipes: ["Watermelon juice", "Watermelon salad", "Frozen watermelon treats", "Watermelon smoothies", "Watermelon gazpacho"],
        links: [
            { title: "Watermelon nutrition", url: "https://www.google.com/search?q=watermelon+health+benefits" },
            { title: "Watermelon farming", url: "https://www.google.com/search?q=california+watermelon+production" }
        ]
    },
    {
        id: 28,
        name: "Honey",
        category: "Specialty",
        image: "https://images.unsplash.com/photo-1587736945944-3eab726a0cc2?w=250&h=250&fit=crop",
        months: ["Year-round", "Peak: Spring-Summer"],
        regions: ["california-wide"],
        description: "Golden to amber liquid produced by California bees from wildflower and cultivated crops. Sweet, complex flavor varies by floral source. Thick, viscous consistency that crystallizes over time. Pure honey never spoils. Storage: Keep at room temperature. Sealed container lasts indefinitely.",
        recipes: ["Honey tea", "Honey oatmeal", "Honey glazed meats", "Honey desserts", "Honey butter toast"],
        links: [
            { title: "Honey health benefits", url: "https://www.google.com/search?q=raw+honey+benefits" },
            { title: "California beekeeping", url: "https://www.google.com/search?q=california+honey+production" }
        ]
    },
    {
        id: 29,
        name: "Apples",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1560806887-1295cd299049?w=250&h=250&fit=crop",
        months: ["August", "September", "October", "November"],
        regions: ["coastal-california"],
        description: "Round fruit with smooth waxy skin in various colors: red, green, yellow, or combinations. Crisp, juicy flesh with small seeds in center. Sweet to tart flavor depending on variety. About fist-sized. Storage: Refrigerate for up to 6 weeks. Keep separate from other produce.",
        recipes: ["Apple pie", "Apple sauce", "Apple cider", "Apple salad", "Baked apples"],
        links: [
            { title: "Apple varieties guide", url: "https://www.google.com/search?q=apple+varieties+chart" },
            { title: "Growing apples California", url: "https://www.google.com/search?q=grow+apples+california" }
        ]
    },
    {
        id: 30,
        name: "Garlic",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1596040708039-6c92ecc95fcb?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August"],
        regions: ["central-valley", "san-francisco"],
        description: "Bulb vegetable composed of multiple cloves with papery white or purple skin. Pungent, spicy flavor that mellows when cooked. Individual cloves about the size of a small almond. Strong aroma. Storage: Keep in cool, dry place (not refrigerated) for up to 2 months.",
        recipes: ["Roasted garlic", "Garlic bread", "Garlic pasta", "Garlic sauce", "Garlic soup"],
        links: [
            { title: "Garlic health benefits", url: "https://www.google.com/search?q=garlic+health+benefits" },
            { title: "Growing garlic California", url: "https://www.google.com/search?q=california+garlic+farming" }
        ]
    },
    {
        id: 31,
        name: "Onions",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1618629869186-7a88e5b0b4e5?w=250&h=250&fit=crop",
        months: ["April", "May", "June", "July"],
        regions: ["central-valley"],
        description: "Bulb vegetable with papery, thin outer skin in yellow, white, or red colors. Layers of white or purple flesh underneath. Sharp, pungent raw flavor that sweetens when cooked. About 3-4 inches in diameter. Storage: Keep in cool, dry place for up to 2 months. Do not refrigerate.",
        recipes: ["Caramelized onions", "Onion soup", "Pickled onions", "Onion rings", "Salsa"],
        links: [
            { title: "Onion varieties", url: "https://www.google.com/search?q=onion+types+varieties" },
            { title: "California onion farming", url: "https://www.google.com/search?q=california+onion+production" }
        ]
    },
    {
        id: 32,
        name: "Chia Seeds",
        category: "Grain",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=250&h=250&fit=crop",
        months: ["August", "September", "October"],
        regions: ["central-valley"],
        description: "Tiny black or white seeds from the chia plant. Oval-shaped seeds about the size of sesame seeds. Mild, slightly nutty flavor. Absorb liquids and become gelatinous. High in omega-3s and fiber. Storage: Keep in cool, dry place or refrigerate for extended storage.",
        recipes: ["Chia pudding", "Chia smoothies", "Chia seed bars", "Overnight oats", "Chia jam"],
        links: [
            { title: "Chia seed nutrition", url: "https://www.google.com/search?q=chia+seeds+health+benefits" },
            { title: "California chia farming", url: "https://www.google.com/search?q=california+chia+seed+production" }
        ]
    },
    {
        id: 33,
        name: "Basil",
        category: "Herb",
        image: "https://images.unsplash.com/photo-1556484687-30226f27b556?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["coastal-california"],
        description: "Fragrant herbaceous plant with tender, bright green leaves. Sweet, slightly peppery flavor with aromatic notes. Delicate leaves bruise easily. About 3-6 inches tall. Intensely aromatic. Storage: Keep in water like flowers at room temperature or wrap in damp paper. Use within 1 week.",
        recipes: ["Pesto", "Caprese salad", "Pasta Genovese", "Thai basil dishes", "Basil lemonade"],
        links: [
            { title: "Basil varieties", url: "https://www.google.com/search?q=basil+varieties+types" },
            { title: "Growing basil", url: "https://www.google.com/search?q=how+to+grow+basil+california" }
        ]
    },
    {
        id: 34,
        name: "Avocado Leaves",
        category: "Herb",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=250&h=250&fit=crop",
        months: ["Year-round"],
        regions: ["los-angeles", "san-diego", "inland-empire"],
        description: "Aromatic leaves from the avocado tree. Thin, narrow, elongated green leaves. Anise-like flavor with slight licorice notes. Essential for authentic Mexican cooking. About 4-6 inches long. Storage: Dry in shade and store in airtight container for up to 6 months.",
        recipes: ["Salsa with avocado leaves", "Mexican black beans", "Soups with avocado leaves", "Traditional guacamole"],
        links: [
            { title: "Avocado leaf uses", url: "https://www.google.com/search?q=hoja+de+aguacate+uses" },
            { title: "Mexican cooking with herbs", url: "https://www.google.com/search?q=mexican+cooking+herbs" }
        ]
    },
    {
        id: 36,
        name: "Pomegranate",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley", "inland-empire"],
        description: "Large round fruit with tough, leathery reddish-brown skin. Interior filled with crimson arils (seeds surrounded by juicy pulp). Tart-sweet flavor. About 3-5 inches in diameter. Crowned tip at one end. Storage: Keep at room temperature for 1-2 weeks or refrigerate for up to 3 months.",
        recipes: ["Pomegranate juice", "Pomegranate salad", "Pomegranate molasses", "Pomegranate sauce", "Pomegranate cocktails"],
        links: [
            { title: "Pomegranate nutrition", url: "https://www.google.com/search?q=pomegranate+health+benefits" },
            { title: "Seeding pomegranate tips", url: "https://www.google.com/search?q=how+to+seed+pomegranate" }
        ]
    },
    {
        id: 37,
        name: "Kiwi Fruit",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1585599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["August", "September", "October", "November", "December"],
        regions: ["coastal-california", "central-valley"],
        description: "Small, round fruit with fuzzy brown skin and vibrant green interior flesh dotted with tiny black seeds. Tart-sweet flavor with tropical notes. About 2-3 inches in diameter. Soft when ripe. Storage: Keep at room temperature until ripe, then refrigerate for up to 2 weeks.",
        recipes: ["Kiwi smoothie bowls", "Kiwi fruit salad", "Kiwi jam", "Kiwi sorbet", "Kiwi cheesecake"],
        links: [
            { title: "Kiwi nutrition facts", url: "https://www.google.com/search?q=kiwi+fruit+nutrition" },
            { title: "California kiwi farming", url: "https://www.google.com/search?q=california+kiwi+production" }
        ]
    },
    {
        id: 38,
        name: "Fig",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September", "October"],
        regions: ["central-valley", "inland-empire"],
        description: "Pear-shaped fruit with tender, thin skin in purple, brown, or green colors. Sweet, soft pink interior flesh with many tiny seeds. Honey-like flavor. About 2-3 inches long. Delicate skin. Storage: Refrigerate for up to 5 days or freeze for longer storage.",
        recipes: ["Fig jam", "Dried figs", "Fig tart", "Fig and prosciutto", "Fig salad"],
        links: [
            { title: "Fig nutrition benefits", url: "https://www.google.com/search?q=fig+health+benefits" },
            { title: "California fig farming", url: "https://www.google.com/search?q=california+fig+production" }
        ]
    },
    {
        id: 39,
        name: "Radish",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "October", "November", "December"],
        regions: ["central-valley", "san-francisco"],
        description: "Small, round or elongated root vegetable with thin, smooth skin in red, pink, white, or multicolor. Crisp, peppery white interior. About 1-2 inches in diameter. Crunchy texture. Storage: Remove greens and refrigerate in plastic bag for up to 2 weeks.",
        recipes: ["Radish salad", "Roasted radishes", "Radish chips", "Radish butter toast", "Pickled radishes"],
        links: [
            { title: "Radish nutrition", url: "https://www.google.com/search?q=radish+health+benefits" },
            { title: "Growing radishes California", url: "https://www.google.com/search?q=california+radish+farming" }
        ]
    },
    {
        id: 40,
        name: "Pumpkin",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November"],
        regions: ["central-valley"],
        description: "Large, round winter squash with thick, ridged orange skin. Dense, orange flesh inside with central seed cavity. Sweet, slightly earthy flavor. Can weigh 2-25 lbs depending on variety. Storage: Keep at cool room temperature for 1-3 months. Excellent for storage.",
        recipes: ["Pumpkin pie", "Pumpkin soup", "Roasted pumpkin", "Pumpkin bread", "Pumpkin puree"],
        links: [
            { title: "Pumpkin nutrition", url: "https://www.google.com/search?q=pumpkin+health+benefits" },
            { title: "California pumpkin farming", url: "https://www.google.com/search?q=california+pumpkin+production" }
        ]
    },
    {
        id: 41,
        name: "Winter Squash",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley"],
        description: "Hard-shelled squash varieties including butternut, acorn, and delicata. Dense, sweet flesh in orange or pale yellow colors. Thick, inedible skin. Ranges 2-5 lbs. Nutty, sweet flavor. Storage: Keep at cool room temperature for 1-3 months. Excellent keeper.",
        recipes: ["Roasted squash", "Squash soup", "Squash risotto", "Stuffed acorn squash", "Squash puree"],
        links: [
            { title: "Winter squash nutrition", url: "https://www.google.com/search?q=winter+squash+health+benefits" },
            { title: "California squash farming", url: "https://www.google.com/search?q=california+winter+squash+production" }
        ]
    },
    {
        id: 42,
        name: "Green Beans",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August", "September"],
        regions: ["central-valley", "san-francisco"],
        description: "Long, slender green pods with edible seeds inside. Tender, crisp texture. Bright green color. About 4-6 inches long. Mild, slightly grassy flavor. Storage: Refrigerate in plastic bag for up to 5 days. Best used fresh.",
        recipes: ["Green bean casserole", "Roasted green beans", "Sautéed green beans", "Green bean salad", "Green beans almondine"],
        links: [
            { title: "Green bean nutrition", url: "https://www.google.com/search?q=green+beans+health+benefits" },
            { title: "Growing green beans California", url: "https://www.google.com/search?q=california+green+bean+farming" }
        ]
    },
    {
        id: 43,
        name: "Corn",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley"],
        description: "Tall stalks producing ears with yellow (or white, bi-color) kernels arranged in rows. Sweet, tender kernels. Ears about 8-10 inches long. Fresh corn has high sugar content. Storage: Refrigerate unhusked for up to 3 days. Cook soon after picking for best flavor.",
        recipes: ["Corn on the cob", "Corn chowder", "Creamed corn", "Cornbread", "Polenta"],
        links: [
            { title: "Corn nutrition facts", url: "https://www.google.com/search?q=corn+nutrition+benefits" },
            { title: "California corn farming", url: "https://www.google.com/search?q=california+corn+production" }
        ]
    },
    {
        id: 44,
        name: "Pear",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["August", "September", "October", "November"],
        regions: ["coastal-california", "central-valley"],
        description: "Bell-shaped fruit with thin, smooth skin in green, brown, or yellow. Sweet, juicy white flesh with slight grittiness. About 3-4 inches long. Buttery texture when ripe. Storage: Keep at room temperature until ripe, then refrigerate for up to 1 week.",
        recipes: ["Pear salad", "Pear tart", "Pear crisp", "Poached pears", "Pear sauce"],
        links: [
            { title: "Pear varieties guide", url: "https://www.google.com/search?q=pear+varieties+types" },
            { title: "California pear farming", url: "https://www.google.com/search?q=california+pear+production" }
        ]
    },
    {
        id: 45,
        name: "Plum",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley", "inland-empire"],
        description: "Round to oval stone fruit with thin, smooth skin in purple, red, or yellow. Sweet, juicy yellow or red flesh with central pit. About 2-3 inches in diameter. Delicate skin. Storage: Keep at room temperature until ripe, then refrigerate for 3-5 days.",
        recipes: ["Plum jam", "Plum crisp", "Grilled plums", "Plum sauce", "Fresh plum salad"],
        links: [
            { title: "Plum nutrition", url: "https://www.google.com/search?q=plum+health+benefits" },
            { title: "California plum farming", url: "https://www.google.com/search?q=california+plum+production" }
        ]
    },
    {
        id: 46,
        name: "Nectarine",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley", "inland-empire"],
        description: "Smooth-skinned stone fruit resembling peaches in orange-red and yellow colors. Sweet, juicy yellow or white flesh with central pit. About 2-3 inches in diameter. Smooth, shiny skin. Storage: Keep at room temperature until ripe, then refrigerate for up to 5 days.",
        recipes: ["Nectarine salad", "Grilled nectarines", "Nectarine pie", "Nectarine jam", "Fresh nectarines"],
        links: [
            { title: "Nectarine nutrition", url: "https://www.google.com/search?q=nectarine+health+benefits" },
            { title: "California nectarine farming", url: "https://www.google.com/search?q=california+nectarine+production" }
        ]
    },
    {
        id: 47,
        name: "Apricot",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["May", "June", "July", "August"],
        regions: ["central-valley", "inland-empire"],
        description: "Small stone fruit with velvety orange skin and central pit. Sweet, juicy golden-orange flesh. About 1.5-2 inches in diameter. Delicate, soft texture. Slightly tangy flavor. Storage: Keep at room temperature until ripe, then refrigerate for 3-5 days.",
        recipes: ["Apricot jam", "Dried apricots", "Apricot tart", "Apricot cobbler", "Fresh apricot sauce"],
        links: [
            { title: "Apricot nutrition", url: "https://www.google.com/search?q=apricot+health+benefits" },
            { title: "California apricot farming", url: "https://www.google.com/search?q=california+apricot+production" }
        ]
    },
    {
        id: 48,
        name: "Cherry",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["May", "June", "July"],
        regions: ["coastal-california", "central-valley"],
        description: "Small, round stone fruit with thin skin in deep red to dark burgundy colors. Sweet or tart juicy red flesh with central pit. About 0.75-1 inch in diameter. Delicate, juicy texture. Storage: Refrigerate in plastic bag for up to 1 week. Handle gently.",
        recipes: ["Fresh cherries", "Cherry pie", "Cherry jam", "Cherry sauce", "Dried cherries"],
        links: [
            { title: "Cherry nutrition", url: "https://www.google.com/search?q=cherry+health+benefits" },
            { title: "California cherry farming", url: "https://www.google.com/search?q=california+cherry+production" }
        ]
    },
    {
        id: 49,
        name: "Grapefruit",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["November", "December", "January", "February", "March"],
        regions: ["inland-empire", "central-valley"],
        description: "Large citrus fruit with thick, bumpy yellow or pink-blushed skin. Pale yellow, pink, or ruby red segmented flesh inside. Tart and refreshing flavor with slight bitterness. About 4-5 inches in diameter. Storage: Keep at room temperature for 2 weeks or refrigerate for up to 4 weeks.",
        recipes: ["Grapefruit juice", "Grapefruit salad", "Broiled grapefruit", "Grapefruit cocktails", "Grapefruit sorbet"],
        links: [
            { title: "Grapefruit nutrition", url: "https://www.google.com/search?q=grapefruit+health+benefits" },
            { title: "California grapefruit farming", url: "https://www.google.com/search?q=california+grapefruit+production" }
        ]
    },
    {
        id: 50,
        name: "Lime",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["Year-round", "Peak: May-October"],
        regions: ["central-valley", "inland-empire"],
        description: "Small citrus fruit with thin, bumpy bright green or yellow skin. Very tart, acidic juice with few seeds. Round shape about 1-2 inches in diameter. Fragrant zest. Storage: Keep at room temperature for 2 weeks or refrigerate for up to 1 month.",
        recipes: ["Lime juice", "Lime margarita", "Lime tart", "Lime guacamole", "Lime chicken"],
        links: [
            { title: "Lime health benefits", url: "https://www.google.com/search?q=lime+health+benefits" },
            { title: "California lime farming", url: "https://www.google.com/search?q=california+lime+production" }
        ]
    },
    {
        id: 51,
        name: "Tangerine",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February"],
        regions: ["central-valley", "inland-empire"],
        description: "Small to medium citrus fruit with loose, easy-to-peel thin skin in orange color. Sweet, juicy orange segmented flesh. About 2-3 inches in diameter. Fragrant aroma. Storage: Keep at room temperature for 2 weeks or refrigerate for up to 3 weeks.",
        recipes: ["Fresh tangerines", "Tangerine juice", "Tangerine salad", "Tangerine cake", "Mandarin orange marmalade"],
        links: [
            { title: "Tangerine nutrition", url: "https://www.google.com/search?q=tangerine+health+benefits" },
            { title: "California tangerine farming", url: "https://www.google.com/search?q=california+tangerine+production" }
        ]
    },
    {
        id: 52,
        name: "Beet",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley", "san-francisco"],
        description: "Round root vegetable with thin, smooth skin in deep red or golden yellow. Sweet, earthy purple or golden flesh inside. About 2-3 inches in diameter. Tender, fine-grained texture. Storage: Remove greens and refrigerate in plastic bag for up to 3 weeks.",
        recipes: ["Roasted beets", "Beet salad", "Beet soup", "Pickled beets", "Beet juice"],
        links: [
            { title: "Beet nutrition benefits", url: "https://www.google.com/search?q=beet+health+benefits" },
            { title: "Growing beets California", url: "https://www.google.com/search?q=california+beet+farming" }
        ]
    },
    {
        id: 53,
        name: "Parsnip",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley"],
        description: "Long, tapered root vegetable with thin, pale beige or white skin. Creamy white interior flesh with sweet, slightly nutty flavor. About 6-10 inches long. Starchy texture. Storage: Remove greens and refrigerate in plastic bag for up to 3 weeks.",
        recipes: ["Roasted parsnips", "Parsnip fries", "Parsnip soup", "Glazed parsnips", "Mashed parsnips"],
        links: [
            { title: "Parsnip nutrition", url: "https://www.google.com/search?q=parsnip+health+benefits" },
            { title: "Growing parsnips California", url: "https://www.google.com/search?q=california+parsnip+farming" }
        ]
    },
    {
        id: 54,
        name: "Turnip",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December"],
        regions: ["central-valley", "san-francisco"],
        description: "Round or slightly flattened root vegetable with smooth, thin skin in white with purple-red top coloring. Crisp, white interior flesh with slightly peppery flavor. About 2-3 inches in diameter. Storage: Remove greens and refrigerate in plastic bag for up to 2 weeks.",
        recipes: ["Roasted turnips", "Turnip fries", "Turnip greens", "Mashed turnips", "Turnip soup"],
        links: [
            { title: "Turnip nutrition", url: "https://www.google.com/search?q=turnip+health+benefits" },
            { title: "Growing turnips California", url: "https://www.google.com/search?q=california+turnip+farming" }
        ]
    },
    {
        id: 55,
        name: "Bok Choy",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "October", "November", "December"],
        regions: ["san-francisco", "central-valley"],
        description: "Asian green vegetable with white or light green stalks and dark green leaves on top. Mild, slightly sweet flavor with tender stalks. About 6-8 inches tall. Tender leaves and crisp stalks. Storage: Refrigerate in plastic bag for up to 5 days.",
        recipes: ["Stir-fried bok choy", "Bok choy soup", "Steamed bok choy", "Bok choy in garlic sauce", "Asian noodle bowls"],
        links: [
            { title: "Bok choy nutrition", url: "https://www.google.com/search?q=bok+choy+health+benefits" },
            { title: "Cooking bok choy", url: "https://www.google.com/search?q=how+to+cook+bok+choy" }
        ]
    },
    {
        id: 56,
        name: "Swiss Chard",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["March", "April", "May", "September", "October", "November", "December"],
        regions: ["san-francisco", "central-valley"],
        description: "Leafy green with large, tender leaves and thick, colorful stalks in white, yellow, red, or pink. Mild, slightly earthy flavor. About 8-12 inches tall. Hearty texture. Storage: Wrap in damp paper and refrigerate for up to 5 days.",
        recipes: ["Sautéed Swiss chard", "Swiss chard soup", "Swiss chard salad", "Braised chard", "Chard and pasta"],
        links: [
            { title: "Swiss chard nutrition", url: "https://www.google.com/search?q=swiss+chard+health+benefits" },
            { title: "Cooking Swiss chard", url: "https://www.google.com/search?q=how+to+cook+swiss+chard" }
        ]
    },
    {
        id: 57,
        name: "Collard Greens",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["September", "October", "November", "December", "January", "February"],
        regions: ["central-valley", "san-francisco"],
        description: "Large, flat, dark blue-green leaves with thick central vein. Slightly bitter, robust flavor that improves after frost. About 8-12 inches long per leaf. Very hardy, hearty texture. Storage: Refrigerate in plastic bag for up to 1 week.",
        recipes: ["Collard greens", "Braised collards", "Collard and bean soup", "Collard green salad", "Southern collards"],
        links: [
            { title: "Collard greens nutrition", url: "https://www.google.com/search?q=collard+greens+health+benefits" },
            { title: "Cooking collard greens", url: "https://www.google.com/search?q=how+to+cook+collard+greens" }
        ]
    },
    {
        id: 58,
        name: "Mustard Greens",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["January", "February", "March", "April", "October", "November", "December"],
        regions: ["central-valley", "san-francisco"],
        description: "Leafy green with frilly, curly or smooth leaves in dark green color. Peppery, slightly spicy flavor. About 6-10 inches long. Tender to hearty texture depending on age. Storage: Refrigerate in plastic bag for up to 5 days.",
        recipes: ["Sautéed mustard greens", "Mustard green salad", "Braised mustard greens", "Mustard green soup", "Southern style greens"],
        links: [
            { title: "Mustard greens nutrition", url: "https://www.google.com/search?q=mustard+greens+health+benefits" },
            { title: "Cooking mustard greens", url: "https://www.google.com/search?q=how+to+cook+mustard+greens" }
        ]
    },
    {
        id: 59,
        name: "Banana",
        category: "Fruit",
        image: "https://images.unsplash.com/photo-1587736306696-1e5d40031f96?w=250&h=250&fit=crop",
        months: ["Year-round"],
        regions: ["california-wide"],
        description: "Tropical fruit with long, curved shape and thick yellow skin that ripens to golden. Soft, creamy pale yellow interior flesh. Sweet, mild flavor. About 7-8 inches long. Smooth texture. Storage: Keep at room temperature until ripe, then refrigerate for 3-5 days. Peel darkens but fruit inside stays fresh.",
        recipes: ["Banana smoothies", "Banana bread", "Bananas foster", "Chocolate banana", "Banana pudding"],
        links: [
            { title: "Banana nutrition facts", url: "https://www.google.com/search?q=banana+nutrition+benefits" },
            { title: "Banana farming", url: "https://www.google.com/search?q=banana+production+california" }
        ]
    },
    {
        id: 60,
        name: "Cabbage",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["Year-round", "Peak: September-April"],
        regions: ["central-valley", "san-francisco"],
        description: "Large, round head vegetable with tightly packed leaves in green, red, or purple colors. Crisp, crunchy texture. Mild, slightly sweet flavor. Head ranges 3-6 inches in diameter. Storage: Refrigerate in crisper drawer for up to 2 months. Excellent keeper.",
        recipes: ["Coleslaw", "Cabbage stir-fry", "Braised cabbage", "Cabbage soup", "Sauerkraut"],
        links: [
            { title: "Cabbage nutrition", url: "https://www.google.com/search?q=cabbage+health+benefits" },
            { title: "California cabbage farming", url: "https://www.google.com/search?q=california+cabbage+production" }
        ]
    },
    {
        id: 61,
        name: "Eggplant",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["June", "July", "August", "September"],
        regions: ["central-valley"],
        description: "Elongated or round summer vegetable with glossy, thin dark purple (or white, striped) skin. Pale green, spongy interior flesh with many small seeds. Mild flavor. About 8-10 inches long. Storage: Refrigerate for up to 5 days. Do not wash until ready to use.",
        recipes: ["Eggplant parmesan", "Baba ghanoush", "Grilled eggplant", "Eggplant stir-fry", "Ratatouille"],
        links: [
            { title: "Eggplant nutrition", url: "https://www.google.com/search?q=eggplant+health+benefits" },
            { title: "Cooking eggplant", url: "https://www.google.com/search?q=how+to+cook+eggplant" }
        ]
    },
    {
        id: 62,
        name: "Sugar Snap Peas",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["February", "March", "April", "May"],
        regions: ["san-francisco", "central-valley"],
        description: "Tender green pods with rounded shape and entire pod is edible. Crisp, crunchy texture with sweet, tender peas inside. About 3-4 inches long. Juicy, fresh flavor. Storage: Refrigerate in plastic bag for up to 5 days.",
        recipes: ["Raw sugar snaps", "Stir-fried snap peas", "Snap pea salad", "Snap peas with dip", "Snap pea soup"],
        links: [
            { title: "Sugar snap pea nutrition", url: "https://www.google.com/search?q=sugar+snap+peas+health+benefits" },
            { title: "Growing snap peas California", url: "https://www.google.com/search?q=california+snap+pea+farming" }
        ]
    },
    {
        id: 63,
        name: "Pistachios",
        category: "Nut",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["August", "September", "October"],
        regions: ["central-valley"],
        description: "Tree nuts with hard, tan shell naturally splitting to reveal pair of pale green or reddish kernels inside. Crunchy texture with slightly sweet, buttery flavor. About the size of a pea. California produces 99% of U.S. pistachios. Storage: Keep in cool, dry place or refrigerate for up to 2 years. Can be roasted and salted.",
        recipes: ["Roasted pistachios", "Pistachio butter", "Pistachio ice cream", "Salted pistachios", "Pistachio crusted fish"],
        links: [
            { title: "Pistachio nutrition", url: "https://www.google.com/search?q=pistachio+health+benefits" },
            { title: "California pistachio farming", url: "https://www.google.com/search?q=california+pistachio+production" }
        ]
    },
    {
        id: 64,
        name: "Mushrooms",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd37e83?w=250&h=250&fit=crop",
        months: ["Year-round"],
        regions: ["central-valley", "san-francisco"],
        description: "Fungal fruiting bodies with white, brown, or specialty varieties (cremini, shiitake, oyster). Rounded or umbrella-shaped caps with gills underneath. Earthy, savory flavor. About 1-3 inches diameter depending on variety. Storage: Keep in paper bag (not plastic) in refrigerator for up to 1 week.",
        recipes: ["Sautéed mushrooms", "Mushroom soup", "Mushroom risotto", "Grilled portobello", "Mushroom pasta"],
        links: [
            { title: "Mushroom nutrition", url: "https://www.google.com/search?q=mushroom+health+benefits" },
            { title: "California mushroom farming", url: "https://www.google.com/search?q=california+mushroom+production" }
        ]
    }
];
