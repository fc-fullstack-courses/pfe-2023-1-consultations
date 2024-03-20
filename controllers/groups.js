const { User, Group, Phone } = require('../models');

module.exports.createGroup = async (req, res, next) => {
  try {
    const {
      body: { userId, ...groupData },
    } = req;

    const newGroup = await Group.create(groupData);

    // const

    res.status(201).send({ data: newGroup });
  } catch (error) {
    next(error);
  }
};

module.exports.AddUserToGroup = async (req, res, next) => {
  try {
    const {
      params: { userId, groupId },
    } = req;

    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const group = await Group.findByPk(groupId);

    if (!group) {
      throw new Error('Group not found');
    }

    await group.addUser(user);
    // await user.addUser(group);

    res.status(200).send({});
  } catch (error) {
    next(error);
  }
};

module.exports.getGroupWithUsers = async (req, res, next) => {
  try {
    const {
      params: { groupId },
    } = req;

    const group = await Group.findByPk(groupId);

    if (!group) {
      throw new Error('Group not found');
    }

    const users = await group.getUsers();

    res.status(201).send({ data: { group, users } });
  } catch (error) {
    next(error);
  }
};

module.exports.getGroupWithUsersAlt = async (req, res, next) => {
  try {
    const {
      params: { groupId },
    } = req;

    const group = await Group.findByPk(groupId, {
      include: [
        {
          model: User,
          // required: true INNER JOIN
          // right: true RIGHT JOIN,
          // attributes: ['name'],
          through: {
            attributes: [],
          },
          // include: [
          //   {
          //     model: Phone
          //   }
          // ]
        },
        {
          // model: ...
        }
      ],
    });

    // if(!group) {
    //   throw new Error('Group not found');
    // }

    res.status(200).send({ data: group });
  } catch (error) {
    next(error);
  }
};
