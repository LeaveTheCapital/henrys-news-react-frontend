const constants = {
  articles: [
    {
      votes: 0,
      _id: "5ae31116924f164de44c3132",
      title: "Running a Node App",
      body:
        "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
      belongs_to: {
        _id: "5ae31116924f164de44c3129",
        slug: "coding"
      },
      created_by: {
        _id: "5ae31116924f164de44c3131",
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url:
          "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
      },
      __v: 0,
      comment_count: 0
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c3133",
      title:
        "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
      body:
        "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
      belongs_to: {
        _id: "5ae31116924f164de44c3129",
        slug: "coding"
      },
      created_by: {
        _id: "5ae31116924f164de44c312e",
        username: "happyamy2016",
        name: "Amy Happy",
        avatar_url:
          "http://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
      },
      __v: 0,
      comment_count: 4
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c3134",
      title: "22 Amazing open source React projects",
      body:
        "This is a collection of open source apps built with React.JS library. In this observation, we compared nearly 800 projects to pick the top 22. (React Native: 11, React: 11). To evaluate the quality, Mybridge AI considered a variety of factors to determine how useful the projects are for programmers. To give you an idea on the quality, the average number of Github stars from the 22 projects was 1,681.",
      belongs_to: {
        _id: "5ae31116924f164de44c3129",
        slug: "coding"
      },
      created_by: {
        _id: "5ae31116924f164de44c312f",
        username: "cooljmessy",
        name: "Peter Messy",
        avatar_url: "http://i.imgur.com/WfX0Neu.jpg"
      },
      __v: 0,
      comment_count: 3
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c3135",
      title: "Making sense of Redux",
      body:
        "When I first started learning React, I remember reading lots of articles about the different technologies associated with it. In particular, this one article stood out. It mentions how confusing the ecosystem is, and how developers often feel they have to know ALL of the ecosystem before using React. And as someone who’s used React daily for the past 8 months or so, I can definitely say that I’m still barely scratching the surface in terms of understanding how the entire ecosystem works! But my time spent using React has given me some insight into when and why it might be appropriate to use another technology — Redux (a variant of the Flux architecture).",
      belongs_to: {
        _id: "5ae31116924f164de44c3129",
        slug: "coding"
      },
      created_by: {
        _id: "5ae31116924f164de44c312e",
        username: "happyamy2016",
        name: "Amy Happy",
        avatar_url:
          "http://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
      },
      __v: 0,
      comment_count: 0
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c3150",
      title: "What to Cook This Week",
      body:
        "Good morning. Here’s the plan for the week, not including breakfast because I’m on a farina kick and that’s not to everyone’s taste, and not including lunch because really when it comes to the midday hours you should get out of the office or the house and walk around. If you get something to eat, great, but the most important thing is to be outside where the stories are. There’s nothing happening at your desk but a screen. Anyway! I’m thinking chicken paprikash for dinner tonight, a nod toward the coming fall, served over buttery egg noodles, with green beans on the side. If you have the time, make an apple cake for dessert.",
      belongs_to: {
        _id: "5ae31116924f164de44c312b",
        slug: "cooking"
      },
      created_by: {
        _id: "5ae31116924f164de44c3130",
        username: "weegembump",
        name: "Gemma Bump",
        avatar_url:
          "http://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg"
      },
      __v: 0,
      comment_count: 1
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c3151",
      title: "Halal food: Keeping pure and true",
      body:
        "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of inghai proince, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
      belongs_to: {
        _id: "5ae31116924f164de44c312b",
        slug: "cooking"
      },
      created_by: {
        _id: "5ae31116924f164de44c3130",
        username: "weegembump",
        name: "Gemma Bump",
        avatar_url:
          "http://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg"
      },
      __v: 0,
      comment_count: 4
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c313e",
      title: "What does Jose Mourinho's handwriting say about his personality?",
      body:
        "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
      belongs_to: {
        _id: "5e31116924f164de44c312a",
        slug: "football"
      },
      created_by: {
        _id: "5ae31116924f164de44c312c",
        username: "tickle122",
        name: "Tom Tickle",
        avatar_url:
          "http://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg"
      },
      __v: 0,
      comment_count: 3
    },
    {
      votes: 0,
      _id: "5ae31116924f164de44c313f",
      title: "Who Will Manage Your Club in 2021?",
      body:
        "Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.",
      belongs_to: {
        _id: "5e31116924f164de44c312a",
        slug: "football"
      },
      created_by: {
        _id: "5ae31116924f164de44c3131",
        username: "jessjelly",
        name: "Jess Jelly",
        avatar_url:
          "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg"
      },
      __v: 0,
      comment_count: 3
    }
  ],
  topics: [
    {
      _id: "5ae31116924f164de44c3129",
      title: "Coding",
      slug: "coding",
      __v: 0
    },
    {
      _id: "5ae31116924f164de44c312a",
      title: "Football",
      slug: "football",
      __v: 0
    },
    {
      _id: "5ae31116924f164de44c312b",
      title: "Cooking",
      slug: "cooking",
      __v: 0
    }
  ],
  users: [
    {
      username: "tickle122",
      name: "Tom Tickle",
      avatar_url:
        "http://www.spiritsurfers.net/monastery/wp-content/uploads/_41500270_mrtickle.jpg"
    },
    {
      username: "grumpy19",
      name: "Paul Grump",
      avatar_url: "http://www.tumbit.com/profile-image/4/original/mr-grumpy.jpg"
    },
    {
      username: "happyamy2016",
      name: "Amy Happy",
      avatar_url:
        "http://vignette1.wikia.nocookie.net/mrmen/images/7/7f/Mr_Happy.jpg/revision/latest?cb=20140102171729"
    },
    {
      username: "cooljmessy",
      name: "Peter Messy",
      avatar_url: "http://i.imgur.com/WfX0Neu.jpg"
    },
    {
      username: "weegembump",
      name: "Gemma Bump",
      avatar_url:
        "http://www.upandrunning.co.uk/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/m/r/mr-bump.jpg"
    },
    {
      _id: "5ae31116924f164de44c3131",
      username: "jessjelly",
      name: "Jess Jelly",
      avatar_url:
        "https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg",
      __v: 0
    }
  ]
};

export default constants;
