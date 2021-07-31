export default function initResourceController(db) {
  const index = async (req, res) => {
    const { userId } = req.cookies;
    const { title, link, skillId } = req.body;

    try {
      const newResource = await db.Resource.create({
        resourceName: title,
        resourceLink: link,
        skillId,
        userId,
      });

      res.send(newResource);
    } catch (error) {
      console.log(error);
    }
  };

  return { index };
}
