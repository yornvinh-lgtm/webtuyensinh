
import { Dossier, DossierStatus, University } from './types';

export const MOCK_DOSSIERS: Dossier[] = [
  {
    id: '1',
    schoolName: 'Đại học Bách Khoa TP.HCM',
    major: 'Khoa học Máy tính',
    method: 'Xét tuyển học bạ',
    deadline: '2024-06-15',
    progress: 45,
    items: [
      { id: 'item1', title: 'Bảng điểm lớp 10, 11, 12', status: DossierStatus.MISSING, required: true },
      { id: 'item2', title: 'CCCD (Công chứng)', status: DossierStatus.WARNING, required: true, notes: 'Cần bổ sung bản photo' },
      { id: 'item3', title: 'Chứng chỉ IELTS', status: DossierStatus.COMPLETED, required: false, fileUrl: 'ielts.pdf' }
    ]
  },
  {
    id: '2',
    schoolName: 'Đại học Kinh tế TP.HCM',
    major: 'Marketing',
    method: 'Đánh giá năng lực',
    deadline: '2024-05-20',
    progress: 80,
    items: [
      { id: 'item4', title: 'Giấy chứng nhận kết quả thi ĐGNL', status: DossierStatus.COMPLETED, required: true },
      { id: 'item5', title: 'Đơn đăng ký xét tuyển', status: DossierStatus.COMPLETED, required: true }
    ]
  }
];

export const MOCK_UNIVERSITIES: University[] = [
  {
    id: 'u1',
    name: 'Đại học Bách Khoa TP.HCM',
    logo: 'https://picsum.photos/seed/hcmut/200',
    description: 'Trường đại học kỹ thuật hàng đầu tại miền Nam Việt Nam.',
    majors: ['Khoa học Máy tính', 'Kỹ thuật Điện', 'Kỹ thuật Cơ khí'],
    methods: ['Xét tuyển học bạ', 'Điểm thi THPT', 'Đánh giá năng lực'],
    requirements: ['Học bạ 3 năm', 'CCCD', 'Giấy khai sinh']
  },
  {
    id: 'u2',
    name: 'Đại học Kinh tế TP.HCM',
    logo: 'https://picsum.photos/seed/ueh/200',
    description: 'Cơ sở đào tạo kinh tế và quản lý uy tín.',
    majors: ['Marketing', 'Tài chính Ngân hàng', 'Quản trị Kinh doanh'],
    methods: ['Xét tuyển học sinh giỏi', 'Điểm thi THPT'],
    requirements: ['Học bạ', 'Chứng chỉ ngoại ngữ']
  }
];
