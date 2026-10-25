window.SKELIO = window.SKELIO || {};
window.SKELIO.specimens = [
  { code:'0100', name:'蘇門答臘姬兜', latin:'Xylotrupes sumatrensis', photo:'photos/0100.png', cutout:false },
  { code:'0201', name:'獨角仙', latin:'Trypoxylus dichotomus', photo:'photos/0201.png', cutout:false },
  { code:'0601', name:'蘇門答臘巨扁', latin:'Dorcus titanus yasuokai', photo:'photos/0601.png', cutout:false },
  { code:'0800', name:'戰神大兜', latin:'Megasoma mars', photo:'photos/0800.png', cutout:false, model:'戰神大兜.glb' },
  { code:'0900', name:'英特梅迪鬼豔鍬形蟲', latin:'Odontolabis dalmanni intermedia', photo:'photos/0900.png', cutout:true },
  { code:'1000', name:'長頸鹿鋸鍬', latin:'Prosopocoilus giraffa nishikawai', photo:'photos/1000.png', cutout:false, model:'長頸鹿.glb' },
  { code:'1100', name:'澳洲彩虹鍬形蟲', latin:'Phalacrognathus muelleri', photo:'photos/1100.png', cutout:true },
  { code:'1101', name:'龍荔天牛', latin:'Tithoes confinis', photo:'photos/1101.png', cutout:true },
  { code:'1102', name:'CCB 南洋大兜', latin:'Chalcosoma mollenkampi', photo:'photos/1102.png', cutout:false },
  { code:'1200', name:'泰坦天牛', latin:'Titanus giganteus', photo:'photos/1200.png', cutout:true },
  { code:'1300', name:'三叉戟大兜', latin:'Chalcosoma chiron', photo:'photos/1300.png', cutout:true },
  { code:'1500', name:'兔子尤犀金龜', latin:'Eupatorus birmanicus', photo:'photos/1500.png', cutout:true, model:'兔子.glb' },
  { code:'1501', name:'戴氏恐螻步甲', latin:'Crepidopterus decorsei', photo:'photos/1501.png', cutout:true },
  { code:'1600', name:'CM 南洋大兜', latin:'Chalcosoma caucasus', photo:'photos/1600.png', cutout:true },
  { code:'1601', name:'巴拉望', latin:'Dorcus titanus palawanicus', photo:'photos/1601.png', cutout:true, model:'巴拉望.glb' },
  { code:'1700', name:'亞克提恩大兜', latin:'Megasoma actaeon', photo:'photos/1700.png', cutout:true },
  { code:'1900', name:'犀牛叉角鍬形蟲', latin:'Hexarthrius rhinoceros', photo:'photos/1900.png', cutout:false },
  { code:'1901', name:'歐洲深山鍬形蟲', latin:'Lucanus cervus akbesianus', photo:'photos/1901.png', cutout:true },
  { code:'2000', name:'薄翅天牛', latin:'Enoplocerus armillatus', photo:'photos/2000.png', cutout:true },
  { code:'2100', name:'中國大鍬', latin:'Dorcus hopei saundersi', photo:'photos/2100.png', cutout:false },
  { code:'2200', name:'蘇門答臘寬扁', latin:'Dorcus alcides', photo:'photos/2200.png', cutout:true },
  { code:'2400', name:'黃邊寶石吉丁蟲', latin:'Chrysochroa limbata', photo:'photos/2400.png', cutout:false },
  { code:'HXM', name:'巨顎叉角鍬形蟲', latin:'Hexarthrius mandibularis', photo:'photos/hexarthrius.png', cutout:true, model:'巨顎叉角.glb' }
];
window.SKELIO.habitat = 'photos/habitat.jpg';
window.SKELIO.tank = ['1000', '1601', 'HXM', '0800', '1500']
  .map(code => window.SKELIO.specimens.find(s => s.code === code))
  .concat([
    { name:'傑森暴龍', model:'傑森暴龍.glb' },
    { name:'巨人柱', model:'巨人柱.glb' },
    { name:'蠍子', model:'蠍子.glb' }
  ]);
