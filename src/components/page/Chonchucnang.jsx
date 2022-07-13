import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
export default function Chucnang() {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="gradient" className="w-full bg-white text-black mb-1 border-black">CHỌN CHỨC NĂNG</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem> <Button className="bg-white text-black w-96 border-black" variant="gradient">Thêm Sản Phẩm</Button></MenuItem>
        <MenuItem> <Button className="bg-white text-black w-96 mt-2 border-black" variant="gradient">Open Menu</Button></MenuItem>
        <MenuItem> <Button className="bg-white text-black w-96 mt-2 border-black" variant="gradient">Ope</Button></MenuItem>
      </MenuList>
    </Menu>
  );
}