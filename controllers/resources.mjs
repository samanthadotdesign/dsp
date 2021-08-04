export default function initResourceController(db) {
  const index = async (req, res) => {
    const { userId } = req.cookies;
    const { title, link, skillId } = req.body;

    fetch('https://favicongrabber.com/api/grab/udemy.com')
      .then((response) => response.json())
      .then(({ icons }) => icons.filter(({ src }) => /apple/.test(src)))
      .then((icons) => icons.forEach((icon) => console.log(icon)));

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
