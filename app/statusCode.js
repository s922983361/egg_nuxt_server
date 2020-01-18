
const _MSG = {
    111200 : '111200 Success To Add Manager !!',
    111500 : '111500 Failed To Add Manager !!',
    111400 : '111400 Email is exist!!',
    112200 : '112200 Success To Update Manager !!',
    112500 : '112500 Failed To Update Manager !!',
    113200 : '',
    113500 : '113500 Failed To Fetch Manager Data List!!',
    114200 : '',
    114500 : '114500 Failed To Fetch Manager Data !!',
    115200 : '115200 Success To Delete Manager !!',
    115500 : '115500 Failed To Delete Manager Data !!',
    116200 : '116200 Login Success! Welcome !',
    116400 : '116400 Failed To Login! This Email is not exist.',
    117400 : '117400 Failed To Login! This Password is incorrect ',

    121200 : '121200 Success To Add Role of Manager !!',
    121500 : '121500 Failed To Add Role of Manager !!',
    121400 : '121400 Role is exist!!',
    122200 : '122200 Success To Update Role of Manager !!',
    122500 : '122500 Failed To Update Role of Manager !!',
    123500 : '123500 Failed To Fetch Role of Manager Data List!!',
    125200 : '125200 Success To Delete Role of Manager !!',
    125500 : '125500 Failed To Delete Role of Manager Data !!',

    131200 : '131200 Success To Add Access of Manager !!',
    131500 : '131500 Failed To Add Access of Manager !!',
    131400 : '131400 Access is exist!!',
    132200 : '132200 Success To Update Access of Manager !!',
    132500 : '132500 Failed To Update Access of Manager !!',
    133500 : '133500 Failed To Fetch Access of Manager Data List!!',
    135200 : '135200 Success To Delete Access of Manager !!',
    135500 : '135500 Failed To Delete Access of Manager Data !!',



    991200 : '991200 Success To Add Data!!',
    991500 : '991500 Failed To Add Data!!',
    992200 : '992200 Success To Update Data!!',
    992500 : '992500 Failed To Update Data!!',
    995200 : '995200 Success To Delete Data!!',
    995500 : '995500 Failed To Delete Data !!',

    90500: '90500 Server ERROR',
    91500: '91500 Parmas Insert ERROR'
} 
const _TITLE = {    
    111200 : '增加管理員成功!',
    111500 : '發生錯誤,增加管理員失敗! 請聯絡系統管理員',
    111400 : '該信箱重複!',
    112200 : '更新管理員成功!',
    112500 : '發生錯誤,更新管理員失敗! 請聯絡系統管理員',
    113200 : '',
    113500 : '發生錯誤,獲取管理員列表失敗! 請聯絡系統管理員',
    114200 : '',
    114500 : '發生錯誤,獲取管理員數據失敗! 請聯絡系統管理員',
    115200 : '刪除該管理員成功!',
    115500 : '發生錯誤,刪除管理員數據失敗! 請聯絡系統管理員',
    116200 : '登入成功!,歡迎回來',
    116400 : '登入錯誤, 電子郵件信箱不存在! ',
    117400 : '登入錯誤, 密碼不正確! ',

    121200 : '增加管理員角色成功!',
    121500 : '發生錯誤,增加管理員角色失敗! 請聯絡系統管理員',
    121400 : '該角色名稱重複!',
    122200 : '更新管理員角色成功!',
    122500 : '發生錯誤,更新管理員角色失敗! 請聯絡系統管理員',
    123500 : '發生錯誤,獲取管理員角色列表失敗! 請聯絡系統管理員',
    125200 : '刪除該管理員角色成功!',
    125500 : '發生錯誤,刪除管理員角色數據失敗! 請聯絡系統管理員',

    131200 : '增加管理員權限成功!',
    131500 : '發生錯誤,增加管理員權限失敗! 請聯絡系統管理員',
    131400 : '該權限名稱重複!',
    132200 : '更新管理員權限成功!',
    132500 : '發生錯誤,更新管理員權限失敗! 請聯絡系統管理員',
    133500 : '發生錯誤,獲取管理員權限列表失敗! 請聯絡系統管理員',
    135200 : '刪除該管理員權限成功!',
    135500 : '發生錯誤,刪除管理員權限數據失敗! 請聯絡系統管理員',
    




    991200 : '新增更新成功!',
    991500 : '新增更新失敗! 請聯絡系統管理員',
    992200 : '更新成功!',
    992500 : '更新失敗! 請聯絡系統管理員',
    995200 : '刪除成功!',
    995500 : '刪除失敗! 請聯絡系統管理員',

    90500: '發生不明錯誤,請聯絡系統管理員!',
    91500: '參數校驗錯誤,請聯絡系統管理員!'
}
module.exports = {
    _CODE:{
        /** 110000 MANAGER **/
        MANAGER_ADD_SUCCESS:            111200,
        MANAGER_ADD_ERROR:              111500,
        MANAGER_EMAIL_ISEXiST:          111400,
        MANAGER_UPDATE_SUCCESS:         112200,
        MANAGER_UPDATE_ERROR:           112500,
        MANAGER_FETCH_DATALIST_ERROR:   113500,
        MANAGER_FETCH_DATA_ERROR:       114500,
        MANAGER_DELETE_SUCCESS:         115200,
        MANAGER_DELETE_ERROR:           115500,
        MANAGER_LOGIN_SUCCESS:          116200,
        MANAGER_NOT_EXSIT:              116400,
        MANAGER_PASSWORD_INCORRECT:     117400,

        /** 120000 ROLE **/
        ROLE_ADD_SUCCESS:               121200,
        ROLE_ADD_ERROR:                 121500,
        ROLE_TITLE_ISEXiST:             121400,
        ROLE_UPDATE_SUCCESS:            122200,
        ROLE_UPDATE_ERROR:              122500,
        ROLE_FETCH_DATALIST_ERROR:      123500,
        ROLE_DELETE_SUCCESS:            125200,
        ROLE_DELETE_ERROR:              125500,

        /** 130000 ROLE **/
        ACCESS_ADD_SUCCESS:             131200,
        ACCESS_ADD_ERROR:               131500,
        ACCESS_TITLE_ISEXiST:           131400,
        ACCESS_UPDATE_SUCCESS:          132200,
        ACCESS_UPDATE_ERROR:            132500,
        ACCESS_FETCH_DATALIST_ERROR:    133500,
        ACCESS_DELETE_SUCCESS:          135200,
        ACCESS_DELETE_ERROR:            135500,
        





        /** 990000 COMMON **/
        COMMON_ADD_SUCCESS:             991200,
        COMMON_ADD_ERROR:               991500,        
        COMMON_UPDATE_SUCCESS:          992200,
        COMMON_UPDATE_ERROR:            992500,        
        COMMON_DELETE_SUCCESS:          995200,
        COMMON_DELETE_ERROR:            995500,


         /** 90000 SPECIAL ERROR **/
        SERVER_ERROR: 90500,
        PARMAS_INSERT_ERROR: 91500,
    },
    CTXBODY (code, boolen = false) { 
        let obj    
        return obj = {
            success: boolen,
            resCode: code,
            // title: _TITLE[code],
            // msg: _MSG[code]
        }
    }
}