window.SKELIO = window.SKELIO || {};
window.SKELIO.specimens = [
  { code:'1000', name:'長頸鹿鋸鍬', latin:'Prosopocoilus giraffa nishikawai', model:'長頸鹿.glb' },
  { code:'1601', name:'巴拉望', latin:'Dorcus titanus palawanicus', model:'巴拉望.glb' },
  { code:'HXM', name:'巨顎叉角鍬形蟲', latin:'Hexarthrius mandibularis', model:'巨顎叉角.glb' },
  { code:'0800', name:'戰神大兜', latin:'Megasoma mars', model:'戰神大兜.glb' },
  { code:'1500', name:'兔子尤犀金龜', latin:'Eupatorus birmanicus', model:'兔子.glb' },
  { code:'1200', name:'泰坦天牛', latin:'Titanus giganteus', model:'泰坦天牛.glb' },
  { code:'1100', name:'澳洲彩虹鍬形蟲', latin:'Phalacrognathus muelleri', model:'彩虹.glb' },
  { name:'彩虹藍', model:'彩虹+藍.glb' },
  { name:'傑森暴龍', model:'傑森暴龍.glb' },
  { name:'巨人柱', model:'巨人柱.glb' },
  { name:'蠍子', model:'蠍子.glb' }
].filter(spec => spec && typeof spec.model === 'string' && spec.model);

const tankCodes = ['1000', '1601', 'HXM', '0800', '1500', '1200', '1100'];
const tankByCode = tankCodes.map(code => window.SKELIO.specimens.find(spec => spec.code === code) || null);
const missingCodes = tankCodes.filter((code, index) => !tankByCode[index]);
if (missingCodes.length) console.warn('找不到缸內標本', missingCodes);
window.SKELIO.tank = tankByCode
  .filter(spec => spec && spec.model)
  .concat(window.SKELIO.specimens.filter(spec => spec && spec.model && !spec.code));
