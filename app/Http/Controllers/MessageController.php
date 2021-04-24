<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Contact;

class MessageController extends Controller
{
    function MessageIndex()
    {
        return view('Message');
    }
    function getMessagesData()
    {
        $result = Contact::orderBy('id', 'desc')->get();
        return $result;
    }
    function MessageDelete(Request $req)
    {
        $data = Contact::find($req->id);
        $result = $data->delete();
        if($result==true)
        {
            return 1;
        }
        else{
            return 0;
        }
    }
}
