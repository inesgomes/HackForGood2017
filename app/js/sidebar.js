document.write(
  '<nav class="navbar-default navbar-static-side" role="navigation">' +
      '<div class="sidebar-collapse"> ' +
        '<ul class="nav metismenu" id="side-menu">' +
          '<li class="nav-header">'+
            '<div class="dropdown profile-element">' +
              '<span><img alt="image" class="img-circle" src="../img/profile_small.jpg" /></span> ' +
              '<span class="clear"> ' +
                '<span class="block m-t-xs"><strong class="font-bold"><a href="profile.html">Username</a></strong></span></span>'+
              '</span>'+
            '</div>'+
          '</li> ' +
          '<li> <a href = "main"id = "main_button"><i class="fa fa-book"></i> <span class="nav-label">Main Page</span></a> </li> <li>' +
          '<li>'+
            '<a onclick="window.location = \'createTicket?type=request\'"><i class="fa fa-slideshare"></i>' +
              '<span class="nav-label">Create help request</span>'+
            '</a>'+
          '</li> ' +
          '<li><a onclick="window.location = \'createTicket?type=offer\'"><i class="fa fa-handshake-o"></i>'+
            '<span class="nav-label">Create Offer</span></a>'+
          '</li>' +
          '<li> <a onclick="window.location = \'listall?type=offer\'"><i class="fa fa-plus-square"></i> <span class="nav-label">See Offers</span></a> </li> <li>' +
    ' <a onclick="window.location = \'listall?type=request\'"><i class="fa fa-plus-square-o"></i>' +
    ' <span class="nav-label">See Help Requests </span></a> </li> </ul> </div> </nav>' +
    ' <div id="page-wrapper" class="gray-bg"> <div class="row border-bottom"> ' +
    '<nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">' +
    ' <ul class="nav navbar-top-links navbar-right"> <li class="dropdown">' +
    ' <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#"> <i class="fa fa-envelope"></i>  ' +
    '<span class="label label-warning">16</span> </a> </li> <li class="dropdown">' +
    ' <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#"> <i class="fa fa-bell"></i> ' +
    '<span class="label label-primary">8</span> </a> </li> <li> <a href="../"><i class="fa fa-sign-out"></i> Log out</a>' +
    ' </li> </ul> </nav> </div>');
