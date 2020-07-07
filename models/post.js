module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    lat: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: false
    },
    lng: {
      type: DataTypes.FLOAT(10, 6),
      allowNull: false
    }
  });

  // Post.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   Post.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Post;
};
