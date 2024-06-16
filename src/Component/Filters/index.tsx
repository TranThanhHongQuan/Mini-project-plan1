import React from 'react';
import { Radio, Checkbox, DatePicker, Button } from 'antd';
import './Filters.css';

const { RangePicker } = DatePicker;

const Filters = () => {
  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="filter-section">
        <h4>Show Me</h4>
        <Radio.Group defaultValue="everything">
          <Radio value="everything">Everything</Radio>
          <Radio value="unwatched">Movies I Haven't Seen</Radio>
          <Radio value="watched">Movies I Have Seen</Radio>
        </Radio.Group>
      </div>
      <div className="filter-section">
        <h4>Release Dates</h4>
        <Checkbox defaultChecked>Search all releases?</Checkbox>
        <RangePicker />
      </div>
      <div className="filter-section">
        <h4>Genres</h4>
        <div className="genres">
          <Button>Chương Trình Truyền Hình</Button>
          <Button>Phim Bí Ẩn</Button>
          <Button>Phim Chiến Tranh</Button>
          <Button>Phim Chính Kịch</Button>
          <Button>Phim Gia Đình</Button>
          <Button>Phim Giả Tưởng</Button>
          <Button>Phim Gây Cấn</Button>
          <Button>Phim Hoạt Hình</Button>
          <Button>Phim Hài</Button>
          <Button>Phim Hành Động</Button>
          <Button>Phim Hình Sự</Button>
          <Button>Phim Khoa Học Viễn Tưởng</Button>
          <Button>Phim Kinh Dị</Button>
          <Button>Phim Lãng Mạng</Button>
          <Button>Phim Lích sử</Button>
          <Button>Phim Miền Tây</Button>
          <Button>Phim Nhạc</Button>
          <Button>Phim Phiêu lưu</Button>
          <Button>Phim Tài Liệu</Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
