export default {
  title: "问卷一",
  items: [
    {
      desc: "Gerder",
      type: "radio",
      opts: ["Mail", "Female"]
    },
    {
      desc: "Age",
      type: "radio",
      value: '',
      opts: [" < 18", " 18 ~ 20", " > 20"]
    },
    {
      desc: "How often do you shop online?",
      type: "radio",
      opts: ["once two weeks", "once a month", "once several months", "once a year", "never"]
    },
    {
      desc: "How often do you shop online from other countries?",
      type: "radio",
      opts: ["once two weeks", "once a month", "once several months", "once a year", "never"]
    },
    {
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [
        {
          desc: "People in higher positions should make most decisions without consulting people in lower positions.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "People in higher positions should not ask the opinions of people in lower positions too frequently.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "People in higher positions should avoid social interaction with people in lower positions. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "People in lower positions should not disagree with decisions by people in higher positions. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "People in higher positions should not delegate important tasks to people in lower positions.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is important to have instructions spelled out in detail so that I always know what I'm expected to do.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is important to closely follow instructions and procedures. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Rules and regulations are important because they inform me of what is expected of me. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Standardized work procedures are helpful. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Instructions for operations are important.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Individuals should sacrifice self-interest for the group. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Individuals should stick with the group even through difficulties. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Group welfare is more important than individual rewards.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Group success is more important than individual success. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Individuals should only pursue their goals after considering the welfare of the group. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Group loyalty should be encouraged even if individual goals suffer.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is important to careful manage money (Thrift). ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is important to go on resolutely in spite of opposition (Persistence).",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Personal steadiness and stability are important.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is important to make long-term planning. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Individuals should give up today's fun for success in the future.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Individuals should work hard for success in the future.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "It is more important for men to have a professional career than it is for women. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Men usually solve problems with logical analysis; women usually solve problems with intuition.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "Solving difficult problems usually requires an active, forcible approach, which is typical of men.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "There are some jobs that a man can always do better than a woman.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I have some contacts with other consumers of amazon.com.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I spend time in communicating with other consumers of amazon.com. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I have communications with other consumers of amazon.com.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The consumers of amazon.com do not take advantage of each other.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The consumers of amazon.com have mutual trust.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The consumers of amazon.com sincerely treat each other.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I believe that consumers of amazon.com will help each other.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I believe that other consumers of amazon.com will help me when I need.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "I will actively help other consumers of amazon.com.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "During shopping, I have similar interest with other consumers of amazom.com.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "During shopping, I have similar goals with other consumers of amazon.com. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "During shopping, I have similar values with other consumers of amazon.com.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        }
      ]
    }
  ]
};
