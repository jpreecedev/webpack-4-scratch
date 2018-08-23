/* eslint-disable import/no-extraneous-dependencies */

import merge from 'webpack-merge'
import common from './webpack.common.babel'

export default merge(common, {
  mode: 'production'
})
