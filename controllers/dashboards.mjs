/**
 * Get dashboard data
 * @param db – Sequelize/Postgress database
 * @returns object { sections, ... }
 */
const getDashboardData = async (db, userId) => {
  let result;
  try {
    const sections = await db.Section.findAll();
    const categories = await db.Category.findAll();
    const skills = await db.Skill.findAll();
    const resources = await db.Resource.findAll();

    // user_skills
    // db.Skill --> query the 'skills table'
    // Include: find the skills with the userId
    const skillsCompleted = await db.Skill.findAll({
      include: {
        // From the users table, find the PK
        model: db.User,
        where: {
          id: userId,
        },
      },
    });

    // user_categories
    // db.Category -> query the categories table
    // Include: find the categories with the userId
    const categoriesCompleted = await db.Category.findAll({
      include: {
        // From the users table, find the PK
        model: db.User,
        where: {
          id: userId,
        },
      },
    });

    result = {
      sections,
      categories,
      skills,
      resources,
      skillsCompleted,
      categoriesCompleted,
    };
  } catch (error) {
    console.log('Error getting dashboard data', error);
  }
  return result;
};

export default function initDashboardController(db) {
  // Get dashboard data
  // Use async/await here to getDashboardData
  const index = async (req, res) => {
    const { userId } = req.cookies;
    const dashboardData = await getDashboardData(db, userId);
    // Object that holds all the dashboard data
    res.send(dashboardData);
  };

  // Send array of category ids as response, from sectionId
  const categories = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.cookies;

    try {
      const categoriesInSection = await db.Category.findAll({ where: { sectionId: id } });
      const categoryIds = [];
      for (let i = 0; i < categoriesInSection.length; i += 1) {
        categoryIds.push(categoriesInSection[i].id);
      }

      const skillsCompleted = await db.Skill.findAll({
        include: {
        // From the users table, find the PK
          model: db.User,
          where: {
            id: userId,
          },
        },
      });

      const skillIdsCompleted = [];
      for (let i = 0; i < skillsCompleted.length; i += 1) {
        skillIdsCompleted.push(skillsCompleted[i].id);
      }

      res.send({ categoryIds, skillIdsCompleted });
    } catch (error) {
      console.log(error);
      res.sendStatus(200);
    }
  };

  // Send array of resource objects as response
  const resources = async (req, res) => {
    // We still need the userId to get the specific user's added resources
    const { userId } = req.cookies;

    try {
      const resourcesInSkill = await db.Resource.findAll({
        where: {
          userId,
        },
      });
      // resourcesInSkill = [ {id...resourceName ... resourceLink}, ...]

      // Create an object where the keys are the skillId for easy retrieval
      const result = {};
      for (let i = 0; i < resourcesInSkill.length; i += 1) {
        // Check if the skillId key exists in the object, add to array
        if (result[resourcesInSkill[i].skillId]) {
          result[resourcesInSkill[i].skillId].push({ name: resourcesInSkill[i].resourceName, link: resourcesInSkill[i].resourceLink });
        }
        // If the key doesn't exist, create an array + create the first object inside
        else {
          result[resourcesInSkill[i].skillId] = [{ name: resourcesInSkill[i].resourceName, link: resourcesInSkill[i].resourceLink }];
        }
      }
      /* object = {
        1: [ {name: ..., link: ...}. {name..., link ...}],
        2: [],
        3: [] ...
      } */
      res.send(result);
    } catch (error) {
      console.log(error);
      res.sendStatus(200);
    }
  };

  return { index, categories, resources };
}