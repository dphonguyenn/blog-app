// ? Redux Saga
// * Redux Saga là một lib redux middleware dùng để xử lí các side effect hiệu quả
// * Điểm đặc biệt giữa Saga và các lib redux khác là nó sử dụng function Generators của ES6 để xử lý “bất đồng bộ” một cách “đồng bộ”.


// ? Function Generators (ES6)
// * Bản chất của generator là tạo ra một function iterator
// iterator là một đối tượng dùng để truy cập vào một dãy các phần tử, mỗi lần nó sẽ trả lại phầ tử tiếp theo trong dãy và giữ được tứ tự duyệt mỗi lần nó được gọi đến.
// * Khác với function bình thường là thực thi và trả về kết quả, thì Generator function có thể thực thi, tạm dừng trả về kết quả và thực thi bằng next(). Từ khóa để làm được việc đấy là “YIELD”
// * Một function được gọi là Generator nếu bên trong có chứa một hay nhiểu biểu thức yield và được khai báo bằng từ khóa function*
// * Nếu trong Generator có nhiều giá trị yield thì mỗi lần gọi next() biểu thức yield tiếp theo sẽ được thực hiện


// ? Cách Redux Saga hoạt động trong mô hình client-server
// * _Redux Saga được cấu hình ở phía client để nhận được các APIs được tạo ra ở phía server
// todo: Luồng hoạt động chung (client-server)
// * Phía server:
// _kết nối database
// _tạo ra các APIs và lưu trữ chúng trên database
// * Phía client:
// _reduxSaga tạo ra các actions effects để fetch dữ liệu từ server
// _dữ liệu được fetch sẽ dùng để render views
// todo: Đi sâu vào luồng hoạt động của saga (client)
// * Cấu trúc folder:
// >src
//   >APIs
//   >redux
//       >actions
//       >constants
//       >reducers
//       >sagas
// * Ý nghĩa:
// - src: thư mục chính của ứng dụng phía client
// - APIs: là thư mục chứa file index.js dùng fetch APIs từ phía server
// - redux: thư mục config cho redux saga
// - actions:  nơi tạo ra actions cho hàm reducer
// - constants: nơi tạo ra INIT_STATE cho hàm reducer
// - reducers: là thư mục chứa
// + file index _ combineReducers chứa tất cả reducers
// + các file reducer con _ thực hiện các actions được dispatch để cập nhật lại state
// - sagas: nơi tạo ra middleware thông qua generator, middleware này lắng nghe mọi actions trong ứng dụng, khi có một actions gửi đến nó sẽ dispatch actions đó đến reducer đã cấu hình
// * Luồng chạy:
// 1. Ở Components <Posts/> ta cần fetch APIs các bài posts từ phía server để render ra giao diện
// function Posts(){
// const dispatch = useDispatch();
// dispatch(actions.getPosts.getPostsRequest());
// ...
// }
// 2. action được dispatch sẽ được lắng nghe bởi middleware mà ta đã tạo trong thư mục sagas
// 3. dựa vào nội dung actions thực hiện func generator được tạo cho action đó (get APIs từ server)
// 4. APIs lấy được sẽ trả lại cho middleware và middleware sẽ thực hiện dispatch action kèm vs data đó tới reducer
// 5. reducer cập nhật lại state với data nhận được
// 6. state được cập nhật sẽ được dùng để render ra views


// ? Flow khi thuc hien gui 1 request len phia server (views --> action --> sagas --> apis & reducer --> views)
// todo: actions_ tao action tuong ung voi request
// * (constants_ tao initState cho action neu action can new state)    
// todo: sagas_ tao ra function saga config cac actions o tren & take this function saga trong mySaga()
// todo: apis_ dung axios fetch or send request data cho this func saga
// todo: reducers_ update state follow actions 
// todo: Component_ import and dispatch action (import useSelector neu can tuong tac voi du lieu cua State tu Store)


