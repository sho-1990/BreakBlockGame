#pragma strict
var Speed : float = 15.0;

function Update () {
    if (Input.GetMouseButtonDown(0)
        && getRigidbody().velocity == Vector3(0, 0, 0)) {
        getRigidbody()
            .AddForce((transform.forward + transform.right) * Speed,
                      ForceMode.VelocityChange);
    }
}

function OnCollisionEnter () {
    getRigidbody().velocity = getRigidbody().velocity.normalized * 15;

    if (Mathf.Abs(getRigidbody().velocity.y) < 5) {
        getRigidbody().velocity.y *= 5;
    }
    if (Mathf.Abs(getRigidbody().velocity.x) < 5) {
        getRigidbody().velocity *= 5;
    }
}

function getRigidbody() {
    return GetComponent.<Rigidbody>();
}