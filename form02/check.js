function check()
{
	var ht = f.HoTen.value;
	var dc = f.DiaChi.value;
	var em = f.Email.value;
	var dt = f.DienThoai.value;
	
	var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/
	
	if(ht =='')
	{
		alert(' Họ tên không đươc bỏ trống');
		return false;
	}
	if(dc =='')
	{
		alert(' Địa chỉ không đươc bỏ trống');
		return false;
	}
	if(!emRegExp.test(em))
	{
		alert(' Email không hợp lê');
		return false;
	}
	if(!dtRegExp.test(dt))
	{
		alert('Số điện thoai không hợp lê');
		return false;
	}
	if(em=='')
	{
		alert(' Email không đươc bỏ trống');
		return false;
	}
	if(dt=='')
	{
		alert('Số điện thoai không đươc bỏ trống');
		return false;
	}
	return true;
}