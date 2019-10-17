export const procedureData = [
    {
        id : 1,
        title: 'Quy trình mở cửa phòng làm việc',
        date: 'T3, 21/06/2016', //string just for example
        time: '14:22',
        note: 'Đây là trường hợp bất khả kháng, phòng Quản trị Thiết bị không khuyến khích việc các phòng/ban yêu cầu mở cửa theo quy trình này.',
        description: 'Đây là thứ tự các bước tiến hành mở cửa phòng làm việc thuộc sự quản lý của đơn vị trực thuộc trường Đại học Công Nghệ Thông Tin.',
        steps: [
            {
                id: 1,
                content: 'Trưởng đơn vị gặp trực tiếp hoặc liên hệ qua điện thoại với lãnh đạo phòng Quản trị Thiết bị để đề xuất nhân viên sẽ làm việc với phòng Quản trị Thiết bị về việc mở cửa phòng làm việc.'
            },
            {
                id: 2,
                content: 'Lãnh đạo phòng Quản trị Thiết bị sẽ cử nhân viên của phòng phối hợp với nhân viên được đề xuất của phòng/ban để tiến hành mở cửa.'
            }
        ]
    },
    {
        id : 2,
        title: 'Qui trình sửa chữa trang thiết bị Công nghệ Thông tin',
        date: 'T3, 21/06/2016', //string just for example
        time: '14:22',
        note: null,
        description: 'Qui trình Sửa chữa Trang thiết bị Công nghệ Thông tin là thứ tự các bước tiến hành trong một quá trình sửa chữa một thiết bị thuộc sự quản lý của đơn vị trực thuộc trường Đại học Công Nghệ Thông Tin. Ví dụ: Sửa chữa máy tính, máy fax, máy in, bàn làm việc,...',
        steps: [
            {
                id: 1,
                content: 'Đơn vị có nhu cầu sửa chữa thiết bị gọi điện thoại hoặc gửi Email thông báo với ban Dữ liệu & Công nghệ Thông tin yêu cầu kiểm tra thiết bị.'
            },
            {
                id: 2,
                content: 'Ban Dữ liệu & Công nghệ Thông tin phân công người phối hợp với đơn vị để kiểm tra và xác nhận thông tin vào “Phiếu báo hỏng” (phiếu báo hỏng do ban Dữ liệu & Công nghệ Thông tin thực hiện và giao cho đơn vị).'
            },
            //...
        ]
    },
    {
        id : 3,
        title: 'Qui trình bảo hành, bảo trì, thay thế trang thiết bị',
        date: 'T3, 21/06/2016', //string just for example
        time: '14:22',
        note: null,
        description: 'Qui trình Bảo hành, bảo trì, thay thế trang thiết bị là thứ tự các bước tiến hành trong một quá trình bảo hành hay bảo trì một thiết bị hoặc một hệ thống trang thiết bị thuộc sự quản lý của đơn vị trực thuộc trường Đại học Công Nghệ Thông Tin. Ví dụ: bảo trì máy lạnh, bảo trì máy photo, bảo trì âm thanh, bảo trì máy chiếu, bảo trì thiết bị đồ gỗ, bơm mực-thay drum-thay cartridge,...',
        steps: [
            {
                id: 1,
                content: 'Đơn vị có nhu cầu bảo hành hoặc bảo trì trang thiết bị cần phải làm "Giấy đề nghị" (Mẫu_01_QTTB). Giấy đề nghị của đơn vị phải do trưởng đơn vị ký.Trong trường hợp phó trưởng đơn vị ký cần có "Giấy ủy quyền" theo mẫu của phòng Tổ chức Hành chính.'
            },
            {
                id: 2,
                content: 'Đơn vị mang "Giấy đề nghị" + "Trang thiết bị" gửi phòng QTTB.'
            },
            //...
        ]
    }
]