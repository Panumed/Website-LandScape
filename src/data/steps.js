export const steps = [
  // 1
  {
    id: 1,
    type: 'warning',
    text: "คำเตือน\n\nเว็บไซต์นี้เป็นประสบการณ์เชิงโต้ตอบที่อาจกระตุ้นความทรงจำและอารมณ์บางอย่างของคุณ โปรดใช้เวลาไปกับมันในจังหวะที่คุณสบายใจ และสามารถหยุดได้ทุกเมื่อ หากคุณรู้สึกไม่สบายใจคุณสามารถออกจากประสบการณ์นี้ได้ตลอดเวลา\n\nผู้ที่มีปัญหาด้านจิตใจหรือเป็นโรคซึมเศร้า โปรดพิจารณาความเสี่ยงก่อนทำแบบทดสอบ",
    buttonText: "ไปต่อ ->",
    background: 'A'
  },
  // 2
  {
    id: 2,
    type: 'onboarding',
    background: 'A'
  },
  // 3
  {
    id: 3,
    type: 'menu',
    images: ['3-illustration-book-1.png'],
    text: "สวัสดี “{name}” อยากกลับไปที่เรื่องราวไหนดี...",
    choices: [
      { id: 'fav', text: 'เรื่องที่ชอบ' },
      { id: 'grow', text: 'การเติบโต' },
      { id: 'pet', text: 'สัตว์เลี้ยง' },
      { id: 'love', text: 'ความรัก' }
    ],
    background: 'A'
  },
  // 4
  {
    id: 4,
    type: 'info',
    images: ['4-illustration-cloud-1.png', '4-illustration-cloud-2.png'],
    text: "วันนี้เป็นวันหยุดของคุณ..\nหยุดพัก...จากทุกๆวันที่ใช้อยู่",
    background: 'A'
  },
  // 5
  {
    id: 5,
    type: 'choice',
    images: ['5-illustration-cloud-1.png', '5-illustration-cloud-2.png'],
    text: "อากาศวันนี้ของคุณเป็นยังไงบ้าง ?",
    choices: [
      { id: 'sunny', text: 'แดดจ้าสดใส' },
      { id: 'clear', text: 'ท้องฟ้าโล่ง' },
      { id: 'rain', text: 'ฝนกำลังตก' }
    ],
    background: 'A'
  },
  // 6
  {
    id: 6,
    type: 'info',
    images: ['6-illustration-cloud-rain-1.png'],
    text: "ในวันที่ฝนพรำ...\nคุณนั่งอยู่ในบ้านหลังเดิม...\nบ้านหลังที่มีความทรงจำ\nที่เปรียบกับฝนที่กำลังตก..\n\nแต่ยินดีต้อนรับกลับบ้านนะ...",
    background: 'B'
  },
  // 7
  {
    id: 7,
    type: 'choice',
    text: "ความรู้สึกเมื่อนึกถึงบ้านหลังนี้คือ ?",
    choices: [
      { id: 'miss', text: 'คิดถึง' },
      { id: 'neutral', text: 'เฉยๆ' },
      { id: 'sad', text: 'เศร้า' }
    ],
    background: 'B'
  },
  // 8
  {
    id: 8,
    type: 'info',
    images: ['8-illustration-door-1.png'],
    text: "คุณเปิดประตูเข้าไป..\nกวาดสายตาไปทั่วบ้าน..\nนึกถึงบรรยากาศและความรู้สึก\nที่ยังติดค้างในบ้านหลังนี้...",
    background: 'B'
  },
  // 9
  {
    id: 9,
    type: 'info',
    images: ['9-illustration-sad-face-1.png'],
    text: "ในมุมห้อง..คุณมองเห็นเด็กคนหนึ่ง..ที่กำลังถูกบ่นด่าด้วยถ้อยคำที่คุณจำได้ดี...",
    background: 'B'
  },
  // 10
  {
    id: 10,
    type: 'text',
    images: ['10-illustration-scribble-2.png', '10-illustration-scribble-3.png'],
    text: "ถ้อยคำพวกนั้นพูดว่าอะไรหรอ ?",
    placeholder: "คำตอบ",
    background: 'B'
  },
  // 11
  {
    id: 11,
    type: 'choice',
    text: "เด็กคนนั้นทำอะไร ?",
    choices: [
      { id: 'walk_away', text: 'เดินหนีไป' },
      { id: 'sit_quietly', text: 'นั่งฟังเงียบๆ' }
    ],
    background: 'B'
  },
  // 12
  {
    id: 12,
    type: 'info',
    images: ['12-illustration-scribble-1.png', '12-illustration-arrow-2.png'],
    text: "เมื่อบทสนทนาฝ่ายเดียวนั้นจบลง เด็กคนนั้นอยู่คนเดียวแล้ว..\nคุณเดินเขาไปหาเขา...",
    background: 'B'
  },
  // 13
  {
    id: 13,
    type: 'text',
    images: ['10-illustration-scribble-3.png'], // Reuse scribble since no specific 13 image provided
    text: "เขาร้องไห้\nปลอบใจเด็กคนนี้หน่อย...",
    placeholder: "คำตอบ",
    background: 'B'
  },
  // 14
  {
    id: 14,
    type: 'info',
    images: ['14-illustration-hand-1.png'],
    text: "คุณเอามือลูบที่หัวของเด็กคนนั้น...",
    background: 'B'
  },
  // 15
  {
    id: 15,
    type: 'text',
    images: ['15-illustration-happy-face-3.png'],
    text: "เด็กคนนั้นเริ่มยิ้มได้\nเขาอยากฟังเรื่องของคุณอีก..\n“ไม่ได้เจอกันตั้งนาน\nเล่าเรื่องอนาคตให้ฟังอีกหน่อยสิ”",
    placeholder: "คำตอบ",
    background: 'B'
  },
  // 16
  {
    id: 16,
    type: 'info',
    images: ['16-illustration-ear-1.png'],
    text: "กริ้ง...",
    background: 'B'
  },
  // 17
  {
    id: 17,
    type: 'info',
    images: ['17-illustration-clock-1.png'],
    text: "เสียงนาฬิกาดังแล้ว..\nคงถึงเวลาที่ต้องกลับ...",
    background: 'B'
  },
  // 18
  {
    id: 18,
    type: 'info',
    text: "เมื่อคุณกำลังเดินออกไป..เด็กคน\nนั้นดึงเสื้อคุณไว้..คุณหันไปหาเขา...",
    background: 'B'
  },
  // 19
  {
    id: 19,
    type: 'info',
    text: "ขอบคุณนะพี่..ถ้าพี่ไม่มาผมก็คง...แย่",
    background: 'B'
  },
  // 20
  {
    id: 20,
    type: 'info',
    text: "พี่กลับไปแล้วดูแลตัวเองด้วย..\nกินข้าวให้ครบ 5 หมู่..\nหาอะไรสนุกๆทำรอผมด้วยนะ...",
    background: 'B'
  },
  // 21
  {
    id: 21,
    type: 'info',
    text: "แล้วก็...",
    background: 'B'
  },
  // 22
  {
    id: 22,
    type: 'info',
    images: ['22-illustration-happy-face-1.png'],
    text: "“ {dynamic_text} ”",
    dynamicSourceId: 13,
    defaultText: "ไม่เป็นไรนะ อดทนได้ดีมาก เธอทำได้ดีและเก่งที่สุด แต่อดทนอีกสักแปปนะ เดี๋ยวมันก็จะผ่านไป..และเธอจะผ่านไปได้แน่",
    background: 'B'
  },
  // 23
  {
    id: 23,
    type: 'info',
    text: "ขอบคุณนะ...",
    background: 'B'
  },
  // 24
  {
    id: 24,
    type: 'credits',
    text: "จัดทำโดย\nปุญญพัฒน์ กำจัด 1680104727\nธเนษฐ ธเนศานนท์ 1670103887",
    background: 'B'
  }
];
