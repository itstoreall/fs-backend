import DataType from 'sequelize';
import { Model } from './types/model.model';

export default (sequelize: Model) => {
  const Gen = sequelize.define(
    'Gen',
    {
      id: {
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'id',
      },
      payloadId: {
        type: DataType.INTEGER,
        field: 'payloadId',
        validate: {
          isInt: {
            args: { min: 1 },
            msg: 'Bad Request (payloadId)',
          },
        },
      },
      payload: { type: DataType.STRING, field: 'payload' },
    },
    {
      tableName: 'gen',
      timestamps: false,
    }
  );

  return Gen;
};
