

var kobry = 0;

var productName = document.getElementById("pn");
var productPrics = document.getElementById("pp");
var productCategory = document.getElementById("pc");
var productDesc = document.getElementById("pd");


var allProducts = [ ]

if ( localStorage.getItem("allProducts") != null ) {
    
    allProducts = JSON.parse(  localStorage.getItem("allProducts")  );
    disblayAllProducts()
} 

function addNewElemant() {
    
    // var pnValue = productName.value;
    // var ppValue = productName.value;
    // var pcValue = productName.value;
    // var pdValue = productName.value;


    // El rf bta3 kol el products
    // var allProducts = [ ]

    // if ( validatName() == true ) {
        
        if ( document.getElementById("addBtn").innerHTML == "ADD"  ) {
        
            var product = {
        
                name: productName.value,
                price: productPrics.value,
                category: productCategory.value,
                Desc: productDesc.value
        
            }
        
            localStorage.setItem("allProducts" , JSON.stringify( allProducts ) )
        
            allProducts.push(product) 
        
        
            console.log( allProducts );
            ClearForm()
            disblayAllProducts()
        
            }
            else
            {
                var updatedProduct = {
        
                    name: productName.value,
                    price: productPrics.value,
                    category: productCategory.value,
                    Desc: productDesc.value
                }
        
                allProducts.splice( kobry , 1 , updatedProduct   )
                disblayAllProducts()
                localStorage.setItem( ' allProducts ' , JSON.stringify( allProducts ) )
                ClearForm()
                document.getElementById("addBtn").innerHTML = "ADD";
            }

    // }else
    // {
    //     alert( "problem" )
    // }




}

function ClearForm() {

    productName.value = ""
    productCategory.value = ""
    productDesc.value = ""
    productPrics.value = ""

}


// document.getElementById("tbody").innerHTML = `                    

// <tr>

// <td>Chipsy</td>
// <td>20</td>
// <td>Food</td>
// <td>Bad</td>

// </tr>`


function disblayAllProducts() {

    var cartonaa = ""

    for(  var i = 0 ; i < allProducts.length ; i++  ){

        cartonaa = cartonaa + ` 
        
        <tr>

        <td>` + allProducts[i].name + `</td>
        <td>` + allProducts[i].price + `</td>
        <td>${ allProducts[i].category } </td>
        <td>${ allProducts[i].Desc }</td>
        
        <td>
        <button onclick="deleteProduct(${i}) " class="btn btn-danger">Delete</button>
        </td>


        <td>
        <button onclick="updatePruduct(${i}) " class="btn btn-warning">Update</button>
        </td>

        </tr>` 

    };

    document.getElementById("tbody").innerHTML= cartonaa;

}


function deleteProduct(index) 
{

    // splice
    
    
    allProducts.splice( index , 1 );  
    disblayAllProducts()
    localStorage.setItem( "allProducts" , JSON.stringify( allProducts  ) )


}

function search() {

    var term = document.getElementById("Search").value;
    var cartonaa = "";

    for (  var i = 0 ; i< allProducts.length ; i++ ) {

        if ( allProducts[i].name.toLowerCase().indexOf( term ) == 0 || allProducts[i].category.toLowerCase().includes( term.toLowerCase() ) == true ) {
            // console.log( allProducts[i] );

            cartonaa +=         
            
            `<tr>

            <td>` + allProducts[i].name + `</td>
            <td>` + allProducts[i].price + `</td>
            <td>${ allProducts[i].category } </td>
            <td>${ allProducts[i].Desc }</td>
            
            <td>
            <button onclick="deleteProduct(${i}) " class="btn btn-danger">Delete</button>
            </td>
    
    
            <td>
            <button onclick="deleteProduct(${i})" class="btn btn-warning">Update</button>
            </td>
    
            </tr>` 

        }

    }

    document.getElementById("tbody").innerHTML = cartonaa
    
}


function updatePruduct(index)
{   
    // console.log( allProducts[index] );

    kobry = index

    productName.value = allProducts[index].name
    productCategory.value = allProducts[index].category
    productDesc.value = allProducts[index].Desc
    productPrics.value = allProducts[index].price

    document.getElementById("addBtn").innerHTML = 'Edit'

}

// var regExp = /^ [a-z]{3,25} $/i;
// console.log( regExp.test( "ahmed" ) );

// function validatName() {
    
//     var regExp = /^ [a-z]{3,25} $/i;
//     return regExp.test( productName.value ); 
// }