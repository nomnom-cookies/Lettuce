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
        id: 19,
        name: "Wheat",
        category: "Grain",
        image: "https://images.unsplash.com/photo-1574943320219-553eb20e72a6?w=250&h=250&fit=crop",
        months: ["June", "July", "August"],
        regions: ["central-valley"],
        description: "Cereal grain with golden-brown kernels. Small, oval-shaped grains. Mild, nutty flavor when whole. Essential staple crop used for flour, bread, pasta, and cereals. Storage: Keep in cool, dry place. Whole wheat berries last up to 1 year; flour lasts 6-8 months.",
        recipes: ["Wheat bread", "Whole wheat pasta", "Wheat berries", "Granola", "Whole grain cereals"],
        links: [
            { title: "Whole wheat nutrition", url: "https://www.google.com/search?q=whole+wheat+nutrition" },
            { title: "California wheat farming", url: "https://www.google.com/search?q=california+wheat+production" }
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
        id: 35,
        name: "Fennel",
        category: "Vegetable",
        image: "https://images.unsplash.com/photo-1585093169291-84a51947e9d8?w=250&h=250&fit=crop",
        months: ["October", "November", "December", "January", "February"],
        regions: ["san-francisco", "central-valley"],
        description: "Bulbous vegetable with white to pale green base and feathery fronds on top. Mild, sweet licorice flavor. Crunchy texture when raw, tender when cooked. Bulb is about 3-4 inches in diameter. Storage: Refrigerate in plastic bag for up to 5 days. Fronds can be used as herb.",
        recipes: ["Roasted fennel", "Fennel salad", "Braised fennel", "Fennel soup", "Fennel with fish"],
        links: [
            { title: "Fennel preparation", url: "https://www.google.com/search?q=how+to+cook+fennel" },
            { title: "Fennel health benefits", url: "https://www.google.com/search?q=fennel+nutrition+benefits" }
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
    }
];
