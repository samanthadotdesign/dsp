import bcrypt from 'bcrypt';

export default function initUserController(db) {
  // Add a new user that signs up
  const signup = async (req, res) => {
    const { name, email, password: userPassword } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(userPassword, 10);

      // create new instance for the user
      await db.User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.redirect('/');
    } catch (error) {
      console.log('error signing up', error);
    }
  };

  // Sign user in
  const login = async (req, res) => {
    const { email, password: inputPassword } = req.body;
    try {
      // find the instance of the user
      const user = await db.User.findOne({
        where: { email },
      });

      // If user exists
      if (user) {
        const savedPassword = user.password;

        // Compare the saved password with the current input
        const correctPassword = await bcrypt.compare(inputPassword, savedPassword);

        if (!correctPassword) {
          console.log('We didn\'t recognize your password. Please try again!');
          res.sendStatus(403);
        }
        res.cookie('loggedIn', true);
        res.cookie('userId', user.id);
        res.redirect('/');
      } else {
        // If user doesn't exist
        console.log('We couldn\'t find your email. If you can\'t remember your account, we can send you a reminder.');
        res.sendStatus(403);
      }
    } catch (error) {
      console.log('error logging in', error);
    }
  };

  // User logs out
  const logout = async (req, res) => {
    try {
      // delete cookies
      res.clearCookie('loggedIn');
      res.clearCookie('userId');
      res.redirect('/');
    } catch (error) {
      console.log('error logging out', error);
    }
  };

  return { signup, login, logout };
}
