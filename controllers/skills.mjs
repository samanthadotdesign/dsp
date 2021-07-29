export default function initSkillController(db) {
  // Adds new skill to user, adds new category if complete
  const index = async (req, res) => {
    // skillCompleted is a boolean describing if the skill is completed or not
    // skillCompletedArr is array of skillIds of completed skills
    const { skillId, skillCompleted } = req.body;
    const { userId } = req.cookies;

    try {
      const currentSkill = await db.Skill.findByPk(skillId);

      const skillObjectCompleted = await db.UserSkill.findAll({
        where: {
          userId,
          completed: true,
        },
        include:
          {
            model: db.Skill,
            where: {
              categoryId: currentSkill.categoryId,
            },
          },
      });

      console.log(skillObjectCompleted);

      // For existing row in user_skill join table, update 'completed' as true

      // Find the instance of the user skill
      // const userCompleteSkill = await db.UserSkill.findOne({
      //   where: {
      //     userId,
      //     skillId,
      //   },
      // });

      // // If the user hasn't completed the skill, update to true
      // if (userCompleteSkill.completed === false) {
      //   // Save the updated userSkill
      //   userCompleteSkill.completed = true;
      //   await userCompleteSkill.save();

      //   // Check if the category is complete
      //   const skillsInCategoryCount = await db.Skill.count({
      //     where: { categoryId: currentSkill.categoryId },
      //   });

      //   // Count the number of completed skills in that category
      //   // For each completed skill by the user
      //   const userSkillsInCategory = [];

      //   for (let i = 0; i < skillCompletedArr.length; i += 1) {
      //     if (skillCompletedArr.categoryId === currentSkill.categoryId) {
      //       userSkillsInCategory.push(skillCompletedArr[i]);
      //     }
      //   }
      //   console.log('************');
      //   console.log(userSkillsInCategory);
      // }

      // const userSkillsInCategoryCount = userSkillsInCategory.length;

      // // if category is complete, mark category as complete
      // if (skillsInCategoryCount == userSkillsInCategoryCount) {
      //   console.log('running if statement');
      //   // add a new row in user_categories table
      //   // first find instance of the category
      //   const category = await db.Category.findByPk(skill.categoryId);
      //   await category.addUser(user);
      // }
      // }
      // else {
      //   // Removes skill from user, removes category if exists
      //   await skill.removeUser(user);

      //   const category = await db.Category.findByPk(skill.categoryId);
      //   if (category) {
      //     await category.removeUser(user);
      //   }
      // }
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  return { index };
}
