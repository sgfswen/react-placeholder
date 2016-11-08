import React from 'react';
import cx from 'classnames';
import { t, props } from 'tcomb-react';
import TextBlock from './TextBlock';
import RoundShape from './RoundShape';

@props({
  rows: t.Integer,
  color: t.String,
  className: t.maybe(t.String),
  style: t.maybe(t.Object)
})
export default class MediaBlock extends React.Component {

  render() {
    const { className, style, color, rows } = this.props;
    return (
      <div className={cx('media-block', className)} style={{ ...style, display: 'flex' }}>
        <RoundShape
          color={color}
          style={{ minHeight: 55, width: 55, minWidth: 55, marginRight: 10 }}
        />
        <TextBlock color={color} rows={rows} />
      </div>
    );
  }

}
