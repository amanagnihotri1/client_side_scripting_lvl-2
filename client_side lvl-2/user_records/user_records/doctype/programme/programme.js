// Copyright (c) 2024, Aman and contributors
// For license information, please see license.txt

frappe.ui.form.on("Programme",{
    onload:function(frm){
     frm.set_query("employee",()=>
    {   return {
        "filters":{
            "designation":"Instructor"
        }
    };
    });
    },
  after_save:function(frm)
{   
        // Calculate total credits
        frm.call({
            doc: frm.doc,
            method:'user_records.user_records.doctype.programme.programme.total_credits', 
            args:{
                courses: frm.doc.courses,
            },
            callback:function(res){
               sumCredits = parseFloat(res.message);
                frm.set_value('total_credits', sumCredits);
            }   
           
        })
    },
});  
