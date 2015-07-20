/**
 * Created by xingdaolin on 15-7-7.
 */
Ext.onReady(function(){

    var panel = Ext.create('Ext.form.Panel',{
        width:360,
        autoHeight:true,
        frame:true,
        defaults:{
            labelWisth:50,
            allowBlank:false,
        },
        items:[
            {
                xtype:'textfield',
                fieldLabel:'用户名',
                name:'username',
                id:'nameid'
            },{
                xtype:'textfield',
                inputType:'password',
                fieldLabel:'密码',
                name:'password',
                id:'passswdid'
            }
        ]
    });
    var win = Ext.create('Ext.window.Window',{
        title:'登录',
        width:360,
        height:150,
        items:[panel],
        renderTo:'login',
        buttonAlign:'center',
        buttons:[{
            text:'登录',
            handler:login
        },{
            text:'重置',
            handler:function(){
                panel.form.reset();
            }
        }
        ]
    });
    function login(){
        panel.getForm().submit({
            clientValidation:true,
            url:'loginServlet',
            method:'POST',
            success:function(form,action){
                window.location.href='main.jsp';
            },
            failure:function(form,action){
                Ext.Msg.alert('提示','登录失败');
            }
        });
    }
    win.show();
/******** start********/
    
/********* end********/
});