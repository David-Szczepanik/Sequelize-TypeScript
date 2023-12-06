'use strict';

import { Model } from 'sequelize';

interface UserAttributes {
  id: number;
  fileName: string;
  fileSize: number;
  fileHash: string;
}

module.exports = (sequelize:any, DataTypes:any) => { // any because it's a 3rd party library
  class File extends Model<UserAttributes>
      implements UserAttributes {
    id!: number;
    fileName!: string;
    fileSize!: number;
    fileHash!: string;
    // static associate(models:any) {
    //   // define association here
    // }
  }
  File.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fileName:  {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fileHash: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'File',
  });
  return File;
};