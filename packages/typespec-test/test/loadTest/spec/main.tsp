import "@typespec/rest";
import "@typespec/http";
import "./routes.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;
using Azure.Core;

@versioned(APIVersions)
@useAuth(Oauth2)
@service(#{title: "Azure Load Testing"})
@server(
  "https://{endpoint}",
  "These APIs allow end users to create, view and run load tests using Azure Load Test Service.",
  {
    endpoint: string,
  }
)
@doc("""
These APIs allow end users to create, view and run load tests using Azure Load
Test Service.
""")
namespace AzureLoadTesting;

enum APIVersions {
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  v2022_11_01: "2022-11-01",
}

@doc("The Azure Active Directory OAuth2 Flow")
model Oauth2
  is OAuth2Auth<[
    {
      type: OAuth2FlowType.implicit;
      authorizationUrl: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
      scopes: ["https://cnt-prod.loadtesting.azure.com/.default"];
    }
  ]>;