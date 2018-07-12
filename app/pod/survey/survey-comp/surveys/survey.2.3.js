export default {
  title: "问卷三",
  items: [
    {
      desc: "Please indicate how much you disagree or agree with each of the following statements.",
      type: "group",
      opts: [
        {
          desc: "The quantity of the reviews released was large.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The quantity of the reviews was enough to let me make decisions. ",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The information from online reviews was accurate.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The information from online reviews was relevant to my needs.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The information from online reviews was of sufficient to make decisions.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        },
        {
          desc: "The information from online reviews was based on facts.",
          type: "radio",
          opts: ["Strongly Disagree", "Disagree", "Somewhat disagree", "Neutral", "Somewhat Agree", "Agree", "Strongly  Agree"]
        }
      ]
    }
  ]
};
