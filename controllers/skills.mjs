/**
 * When user clicks on the button "Complete Skill"
 * @param db
 * Does not return anything
 */
export default function initSkillController(db) {
  // Adds new skill to user, adds new category if complete
  const index = async (req, res) => {
    const { skillId, skillCompleted } = req.body;
    const { userId } = req.cookies;

    try {
      // mark skill as complete

      // 1. find the instance of the user
      // findOne is a static class method for db.User (class)

      // can use findByPk
      const user = await db.User.findByPk(userId);

      // 2. find the instance of the skill
      const skill = await db.Skill.findByPk(skillId);

      // 3. add a new row in the join table user_skill
      // mixin method createUser only applies the instance 'skill'
      if (skillCompleted) {
        await skill.addUser(user);
        // 4. count the number of skills in a category
        // count inside the 'skills' model for the category id
        const skillsInCategoryCount = await db.Skill.count({
        // already saved the skill object and get the categoryId property
          where: { categoryId: skill.categoryId },
        });

        // 5. count the number of user's skills for that category
        // for user_skills table, use user instance
        const userSkillsInCategory = await user.getSkills({
          where: { categoryId: skill.categoryId },
        });
        const userSkillsInCategoryCount = userSkillsInCategory.length;

        // if category is complete, mark category as complete
        if (skillsInCategoryCount == userSkillsInCategoryCount) {
          console.log('running if statement');
          // add a new row in user_categories table
          // first find instance of the category
          const category = await db.Category.findByPk(skill.categoryId);
          await category.addUser(user);
        }
      }
      else {
        // Removes skill from user, removes category if exists
        await skill.removeUser(user);

        const category = await db.Category.findByPk(skill.categoryId);
        if (category) {
          await category.removeUser(user);
        }
      }

      res.sendStatus(200);
    } catch (error) {
      console.log(error);
    }
  };

  return { index };
}