import { default as mongooseLeanVirtuals } from 'mongoose-lean-virtuals'
import Paginate from 'mongoose-paginate-v2'

import { index, modelOptions, plugin } from '@typegoose/typegoose'

import { mongooseLeanId } from './plugins/lean-id'

const mongooseLeanGetters = require('mongoose-lean-getters')
@plugin(mongooseLeanVirtuals)
@plugin(Paginate)
@plugin(mongooseLeanGetters)
@plugin(mongooseLeanId)
@modelOptions({
  schemaOptions: {
    toJSON: { virtuals: true, getters: true },
    toObject: { virtuals: true, getters: true },
    timestamps: {
      createdAt: 'created',
      updatedAt: false,
    },
    versionKey: false,
  },
})
@index({ created: -1 })
@index({ created: 1 })
export class BaseModel {
  created?: Date

  id: string

  static get protectedKeys() {
    return ['created', 'id', '_id']
  }
}
